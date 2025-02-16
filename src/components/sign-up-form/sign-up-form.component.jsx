import React, { useState } from "react";
import {
  craeteAuthUserWithEmailAndPassword,
  craeteUserDocumnetFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
// import { UserContext } from "../../contexts/user.context";
function SignUpForm() {
  const deafultFromFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(deafultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  //   console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not use email(used already)");
      } else {
        console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(deafultFromFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          id=""
          required
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id=""
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
