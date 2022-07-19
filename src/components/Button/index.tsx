import React from "react";

import { ButtonProps } from "../../../types/lib/Button";

const Button = ({
  title
}: ButtonProps) => {
  return <button>{title} -- uikit btn</button>
}

export default Button;
