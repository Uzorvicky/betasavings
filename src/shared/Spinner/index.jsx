import { ImSpinner2 } from "react-icons/im";
import React from "react";
export default function Spinner({ size, color }) {
  return (
    <ImSpinner2 size={size|| 20} color={color} className="pi-spin text-black" />
  );
}