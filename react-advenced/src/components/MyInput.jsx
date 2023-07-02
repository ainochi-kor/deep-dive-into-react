import React from "react";

const MyInput = (props, ref) => {
  return (
    <div>
      <p>MyInput</p>
      <input ref={ref} />
    </div>
  );
};

export default React.forwardRef(MyInput);
