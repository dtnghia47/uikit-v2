import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  isOutline?: boolean;
  onClick?: () => void;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;
