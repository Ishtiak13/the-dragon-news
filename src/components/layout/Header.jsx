import React from "react";
import Logo from "../../assets/logo.png";
// import { formatFullDate } from '../../utils/formatDate';
import { format } from "date-fns";

const Header = () => {
  const date = new Date();

  return (
    <div className="flex justify-center flex-col items-center max-w-11/12 mx-auto">
      <img src={Logo} alt="Logo" />
      <p className="text-accent text-lg ">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-accent">
        {format(date, "EEEE, MMMM d, y")}
      </p>
    </div>
  );
};

export default Header;
