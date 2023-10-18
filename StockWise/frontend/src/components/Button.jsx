import React from "react";

const Button = ({ title, styles}) => {

  return (
    <button
      type="submit"
      className={`py-[4px] px-[16px] text-[#dcfce7] cursor-pointer rounded font-semibold ${styles} hover:brightness-110 `}
    >
      {title}
    </button>
  );
};

export default Button;
