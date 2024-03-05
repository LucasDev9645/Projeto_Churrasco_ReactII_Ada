import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ text, ...rest }, ref) => {
  return (
    <>
      <label className="block text-base font-bold text-gray-700">{text}</label>
      <input
        {...rest}
        ref={ref as React.RefObject<HTMLInputElement>}
        className="bg-gray-200 p-3 rounded-md font-medium text-lg outline-amber-500"
      />
    </>
  );
};

export default forwardRef(Input);
