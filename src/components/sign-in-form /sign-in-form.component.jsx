import React from "react";
import {
  craeteAuthUserWithEmailAndPassword,
  craeteUserDocumnetFromAuth,
  signinAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";
function SignInForm() {
  const deafultFromFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = React.useState(deafultFromFields);
  const { email, password } = formFields;
  //   console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(res);

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
    const { user } = await signInWithGooglePopup();
    // console.log(res);
    await craeteUserDocumnetFromAuth(user);
    // console.log(userDocRef);
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
