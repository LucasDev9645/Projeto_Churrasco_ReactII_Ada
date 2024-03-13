import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ text, ...rest }, ref) => {
  return (
    <>
      <label className="block text-base font-bold">{text}</label>
      <input className="bg-gray-200 text-neutral-950 p-3 rounded-md font-medium text-lg outline-none ring-amber-500 focus-within:ring-4" 
        {...rest} ref={ref as React.RefObject<HTMLInputElement>} />
    </>
  );
};

export default forwardRef(Input);