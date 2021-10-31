import { authSelectors } from "redux/auth";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
