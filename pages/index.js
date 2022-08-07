import Styles from "../styles/section.module.css";
export default function Home() {
  return (
    <div className={Styles.main}>
      <div className={Styles.pagesContnet}>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <div>
              <h2>this is my home page</h2>
              <p>
                this page to login to my project and create an account there to
                visit evry time
              </p>
              <button className={Styles.button}>descover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={Styles.header}>
<div className={Styles.container}>
  <div className={Styles.content}>
    <div className={Styles.logo}>logo</div>
    <div className={Styles.navbar}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Content</a>
        </li>
        <li>
          <a href="#">contact</a>
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
</div> */
}

{
  /* <div className={Styles.footer}>
<h2 className={Styles.footerText}>all rights reserved</h2>
</div> */
}
