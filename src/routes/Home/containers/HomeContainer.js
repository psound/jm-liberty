import { connect } from 'react-redux';
import { updateView, backFunction } from '../ducks/home'
import HomeView from '../components/HomeView';

// ------------------------------------
// State-to-Prop Mappings
// ------------------------------------
const mapStateToProps = (state: { HomeStore: HomeState }): HomeState => ({

    HomePage: state.HomeStore.HomePage,
    progress: state.HomeStore.progress,
    answearsArray: state.HomeStore.answearsArray,
    checkValue: state.HomeStore.checkValue,

});

// ------------------------------------
// Dispatch-to-Prop Mappings
// ------------------------------------
const mapDispatchToProps: ({updateView: Function, backFunction: Function}) = {
   updateView,
   backFunction,
};

// ------------------------------------
// Default container connection export
// ------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
