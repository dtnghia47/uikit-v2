import * as React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  initData?: object;
  onSubmit?: () => void;
}

declare class Form extends React.Component<FormProps> {}
export default Form;
