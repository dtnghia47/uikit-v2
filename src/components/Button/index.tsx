import React from "react";
import classnames from "classnames";

import { ButtonProps } from "../../../types/lib/Button";
import styles from "./styles.module.css";

/**
 * Primary UI component for user interaction
 */

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  type = "button",
  className = "",
  isOutline = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classnames(className, styles.button, styles[`size--${size}`], {
        [styles.buttonPrimary]: primary,
        [styles.buttonSecondary]: !primary,
        [styles.buttonOutline]: isOutline,
      })}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
