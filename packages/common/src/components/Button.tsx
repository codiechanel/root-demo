import React, { FC } from "react";

type Props = {
  textColor: string;
};

const Button: FC<Props> = (props) => {
  return (
    <button style={{ color: props.textColor }}>nice{props.children}</button>
  );
};

export default Button;
