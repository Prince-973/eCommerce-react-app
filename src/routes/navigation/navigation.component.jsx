import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";

import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  //   console.log(currentUser);
  const signOutHandler = async () => {
    const res = await SignOutUser();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {" "}
          <CrwLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
