import React from "react";
import { useState } from "react";

const useChangeInput = () => {
  const [input, setInput] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, setInput, handleInputChange };
};

export default useChangeInput;
