// ------------------------------------
// Action Constants
// ------------------------------------
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const BACK_VIEW = 'BACK_VIEW';
export const RESULTS_VIEW = 'RESULTS_VIEW';


// ------------------------------------
// Action Creators (these update the app state)
// ------------------------------------
export function changeView(viewInfo: ViewSectionObject): Action {
    //console.log('calling the changeView action creator', viewInfo);
  return {
    type: CHANGE_VIEW,
    payload: viewInfo
  }
}

export function backView(viewInfo: ViewSectionObject): Action {
  return {
    type: BACK_VIEW,
    payload: viewInfo
  }
}

export function resultsView(sectionData: ViewSectionObject): Action {
  return {
    type: RESULTS_VIEW,
    payload: sectionData
  }
}


// ------------------------------------
// Action Dispatchers (these are exposed to the page)
// ------------------------------------

export const updateView = (viewInfo: ViewSectionObject): Function => {
  return (dispatch: Function): Promise => {
    //console.log('calling updateView dispatcher', viewInfo);
    dispatch(changeView(viewInfo));
    return viewInfo;

    // return authApiProxy.loginPost({ authenticationInfo: loginInfo })
    //   .then((response) => {
    //     dispatch(receiveLoginSuccess(response));
    //     console.log(`login success ${JSON.stringify(response)}`);
    //     return response;
    //   }, (error) => {
    //     dispatch(receiveLoginError('* Invalid username or password.'));
    //     return error.json();
    //   });
  }
};

export const backFunction = (viewInfo: ViewSectionObject): Function => {
  return (dispatch: Function): Promise => {
    //console.log('calling updateView dispatcher', viewInfo);
    dispatch(backView(viewInfo));
    return viewInfo;
  }
};

export const resultsFunction = (sectionData: ViewSectionObject): Function => {
  return (dispatch: Function): Promise => {
    dispatch(resultsView(sectionData));
    return sectionData;
  }
};


// ------------------------------------
// Utility Functions
// ------------------------------------


// ------------------------------------
// Actions Export
// ------------------------------------

export const actions = {
    changeView,
    backView,
    resultsView,
};
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [CHANGE_VIEW]: (state: HomeState, action: { payload: ViewSectionObject }): HomeState => {
    //console.log('action handeler', state);
     state.answearsArray.push(action.payload[2]);
      return ({
        ...state,
        progress: (action.payload[0]* 100)/action.payload[1],
        checkValue: false,
      })
    },
    [BACK_VIEW]: (state: HomeState, action: { payload: ViewSectionObject }): HomeState => {
    //console.log('action handeler', action.payload[0]);
     state.answearsArray.pop();
      return ({
        ...state,
        progress: (action.payload[0]* 100)/action.payload[1],
        checkValue: false,
      })
    },
    [RESULTS_VIEW]: (state: HomeState, action: { payload: ViewSectionObject }): HomeState => {
    console.log('action handeler', action.payload);
      return ({
        ...state,
        pageView: 'results',
      })
    },
};

// ------------------------------------
// Initial Store State
// ------------------------------------

const initialState: HomeState = {
  pageView: 'quizz',
  progress: 0,
  answearsArray: [],
  checkValue: false,
};

// ------------------------------------
// Reducer Default Export
// ------------------------------------
export default function HomeReducer (state: HomeState = initialState, action: Action): HomeState {
  const handler = ACTION_HANDLERS[action.type];
  //console.log(state);
  return handler ? handler(state, action) : state;
}
