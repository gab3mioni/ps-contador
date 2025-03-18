import React from "react";
import { ButtonProps } from "./../Button.types";

const CounterButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CounterButton;
