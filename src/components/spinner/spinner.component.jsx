import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.style";

function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default Spinner;
