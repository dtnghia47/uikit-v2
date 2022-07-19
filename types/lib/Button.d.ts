
import * as React from 'react';
// import { CSSModule } from './utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
    * What background color to use
    */
  backgroundColor?: string;
  /**
    * How large should the button be?
    */
  size?: 'small' | 'medium' | 'large';
  /**
    * Button contents
    */
  label: string;
  /**
    * Optional click handler
    */
  onClick?: () => void;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;