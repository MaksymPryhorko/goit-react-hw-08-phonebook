import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "components/AppBar";
import Container from "components/Container";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authOperations, authSelectors } from "redux/auth";
import { Notify } from "notiflix";

const HomeView = lazy(() => import("views/HomeView"));
const RegisterView = lazy(() => import("views/RegisterView"));
const LoginView = lazy(() => import("views/LoginView"));
const ContactsView = lazy(() => import("views/ContactsView"));

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error}`);
    }
  }, [error]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(), [dispatch]);
  });

  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
}
