import React, { useState } from "react";
import {
  craeteUserDocumnetFromAuth,
  signinAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
// import { UserContext } from "../../contexts/user.context";

function SignInForm() {
  const deafultFromFields = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(deafultFromFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-passowrd") {
        alert("wrong Password");
      } else if (error.code === "auth/user-not-found") {
        alert("no user found");
      } else {
        console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(deafultFromFields);
  };

  const signInWithGoogle = async () => {
    // await signInWithGooglePopup();
    dispatch(googleSignInStart());
    // setCurrentUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          id=""
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id=""
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-conatiner">
          <Button type="submit">SignIn</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Gogle Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
