import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>2Taboo4You</div>
      <nav>
        <ul>
          <li>
            <Link href="/" >
              <a className={router.pathname == '/' ? classes.active : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a className={router.pathname == '/settings' ? classes.active : ""}>Setting</a>
            </Link>
          </li>
          <li>
            <Link href="/play">
              <a className={router.pathname == '/play' ? classes.active : ""}>Play</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
