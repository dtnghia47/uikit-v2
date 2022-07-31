import React from "react";

import { FormProps } from "../../../types/lib/Form";

const From = ({ ...props }: FormProps) => {
  return <form {...props}></form>;
};

export default From;
