
import * as React from 'react';
// import { CSSModule } from './utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  title?: string;
  // cssModule?: CSSModule;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;