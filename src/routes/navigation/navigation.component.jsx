import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.style.jsx";

import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.ts";
import { selectIsCartOpen } from "../../store/cart/cart.selector.ts";
import { signOutStart } from "../../store/user/user.action.ts";
// import { SignOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const SignOutUser = () => dispatch(signOutStart());
  // console.log(currentUser);

  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  //   console.log(currentUser);
  //   const signOutHandler = async () => {
  //     await SignOutUser();
  //     setCurrentUser(null);
  //   };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          {" "}
          <CrwLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          {currentUser ? (
            <NavLinks as="span" onClick={SignOutUser}>
              Sign Out
            </NavLinks>
          ) : (
            <NavLinks to="/signin">Sign In</NavLinks>
          )}
          <CardIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
