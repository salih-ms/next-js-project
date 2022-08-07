import { FaShoppingCart } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import Styles from "../../styles/section.module.css";
const NavBar = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.logo}>logo</div>
          <div className={Styles.navbar}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/content">Content</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={Styles.icon}>
            <a>
              <FaShoppingCart />
            </a>
            <a>
              <BiLogInCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
