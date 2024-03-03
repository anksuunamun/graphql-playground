import React, {InputHTMLAttributes} from "react";


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input = (props: IInputProps) => {
  return (
    <input {...props}/>
  );
};

export default Input;