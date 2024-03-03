import { BiSolidHome } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { useState } from "react";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import MiniModal from "./MiniModal";
import { Link } from "react-router-dom";

const Menu = () => {
  const navigatge = useNavigate();
  const [active, setActive] = useState(0);

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  const logout = () => {
    localStorage.clear();
    navigatge("/Login");
  };

  return (
    <>
      <aside className="menu-layout">
        <nav className="main-menu">
          <span
            className={
              active === 0 ? "main-menu-item itemActive" : "main-menu-item"
            }
            onClick={() => handleTabClick(0)}
          >
            <Link to={"/home"}>
              <BiSolidHome className="color-icon" />
            </Link>
          </span>
          <span
            className={
              active === 1 ? "main-menu-item itemActive" : "main-menu-item"
            }
            onClick={() => handleTabClick(1)}
          >
            <Link to={"/favorites"}>
              <BiSolidHeart className="main-menu-item menu-icon" />
            </Link>
          </span>
          <span
            className={
              active === 2 ? "main-menu-item itemActive" : "main-menu-item"
            }
            onClick={() => handleTabClick(2)}
          >
            <RxCountdownTimer />
          </span>
          <span
            className={
              active === 3 ? "main-menu-item itemActive" : "main-menu-item"
            }
            onClick={() => handleTabClick(3)}
          >
            <FaUser />
            {active == 3 ? <MiniModal /> : ""}
          </span>
          <span className="main-menu-item" onClick={() => logout()}>
            <ImExit />
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Menu;
