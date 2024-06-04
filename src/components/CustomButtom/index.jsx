//CSS
import "./Buttom.css";

import { Link } from "react-router-dom";

const CustomButtom = ({ children, link }) => {
  return (
    <Link to={link}>
      <button className="custom-buttom">{children}</button>
    </Link>
  );
};

export default CustomButtom;
