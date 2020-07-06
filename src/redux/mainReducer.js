import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7999Reducer from '../features/EmailAuth7999/redux/reducers';
import CalendarView7998Reducer from '../features/CalendarView7998/redux/reducers';
import CalendarView7981Reducer from '../features/CalendarView7981/redux/reducers';
import EmailAuth7980Reducer from '../features/EmailAuth7980/redux/reducers';
import EmailAuth7969Reducer from '../features/EmailAuth7969/redux/reducers';
import CalendarView7968Reducer from '../features/CalendarView7968/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7999: EmailAuth7999Reducer,
CalendarView7998: CalendarView7998Reducer,
CalendarView7981: CalendarView7981Reducer,
EmailAuth7980: EmailAuth7980Reducer,
EmailAuth7969: EmailAuth7969Reducer,
CalendarView7968: CalendarView7968Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});