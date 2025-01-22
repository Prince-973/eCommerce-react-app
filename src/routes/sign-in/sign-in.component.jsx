import React from "react";
import {
  signInWithGooglePopup,
  craeteUserDocumnetFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(res);
    const userDocRef = await craeteUserDocumnetFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>SignIn with google</button>
    </div>
  );
}

export default SignIn;
