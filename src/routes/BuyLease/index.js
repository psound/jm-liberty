import { injectReducer } from 'store/reducers';

export default (store) => ({
    path: 'home',
  getComponent (nextState, next) {
    require.ensure([
      // React Container Component and Redux "Duck" modules for this route go here
      './containers/HomeContainer',
      './ducks/home'
    ], (require) => {
      // the same React Container Component and Redux "Duck" modules for this route go here, too
      const HomeContainer = require('./containers/HomeContainer').default;
      const HomeDuck = require('./ducks/home').default;

      // inject route's reducer into route's store here
      injectReducer(store, {
        key: 'HomeStore',
        reducer: HomeDuck
      });
      console.log("accounts rdxs index.js", store.getState());
      // render container component for route here
      next(null, HomeContainer);
  }, 'home');
  },
});
