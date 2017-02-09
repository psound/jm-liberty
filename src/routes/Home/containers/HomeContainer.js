import { connect } from 'react-redux';
import { updateView, backFunction, resultsFunction } from '../ducks/home'
import HomeView from '../components/HomeView';

// ------------------------------------
// State-to-Prop Mappings
// ------------------------------------
const mapStateToProps = (state: { HomeStore: HomeState }): HomeState => ({

    pageView: state.HomeStore.pageView,
    progress: state.HomeStore.progress,
    answearsArray: state.HomeStore.answearsArray,
    checkValue: state.HomeStore.checkValue,
    range: state.HomeStore.range,
    quizzName: state.HomeStore.quizzName,

});

// ------------------------------------
// Dispatch-to-Prop Mappings
// ------------------------------------
const mapDispatchToProps: ({updateView: Function, backFunction: Function, resultsFunction: Function}) = {
   updateView,
   backFunction,
   resultsFunction,
};

// ------------------------------------
// Default container connection export
// ------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
