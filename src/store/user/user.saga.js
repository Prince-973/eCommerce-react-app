import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFaield,
  signUpSuccess,
} from "./user.action";
import { USER_ACTION_TYPES } from "./user.type";
import {
  craeteAuthUserWithEmailAndPassword,
  craeteUserDocumnetFromAuth,
  getCurrentUser,
  signinAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  SignOutUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapShtUSerAuth(userAuth, additionalDetais) {
  try {
    const userSnapshot = yield call(
      craeteUserDocumnetFromAuth,
      userAuth,
      additionalDetais
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShtUSerAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    // console.log(email, password);

    const { user } = yield call(
      signinAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapShtUSerAuth, user);
  } catch (error) {
    console.log(error);
  }
}

export function* isUSerAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) {
      return;
    }
    yield call(getSnapShtUSerAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    // console.log(email, password, displayName);

    const { user } = yield call(
      craeteAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFaield(error));
  }
}

export function* signOut() {
  try {
    yield call(SignOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShtUSerAuth, user, additionalDetails);
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUSerAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
