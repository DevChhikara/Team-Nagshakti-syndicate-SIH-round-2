import { useState } from "react";
import styles from "../style";
import {shield} from "../assets";

const Navbar = () => {
  return (
    <div className="py-8 flex items-center navbar">
      <img src={shield} alt=" Team Syndicate" className="w-[100px] h-[32px]" />
      <h1  className={`${styles.paragraph}`}>Team Syndicate</h1>
      </div>
  );
};

export default Navbar;
