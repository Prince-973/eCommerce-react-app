import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";
import { SpinnerContainer } from "../spinner/spinner.style.jsx";
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType] || BaseButton);

function Button({ children, buttonType, isLoading, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
}

export default Button;
