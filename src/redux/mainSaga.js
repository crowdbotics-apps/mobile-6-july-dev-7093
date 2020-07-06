import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7980Saga from '../features/EmailAuth7980/redux/sagas';
import EmailAuth7969Saga from '../features/EmailAuth7969/redux/sagas';
import CalendarView7968Saga from '../features/CalendarView7968/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7980Saga,
EmailAuth7969Saga,
CalendarView7968Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}