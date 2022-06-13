import React, { useState, useCallback } from "react";

const useToggle = (initialToggle = false) => {
  const [value, setToggleValue] = useState(initialToggle);

  const toogle : any = useCallback(() => {
    setToggleValue((value) => !value);
  }, []);

  return [value, toogle];
};

export default useToggle;
