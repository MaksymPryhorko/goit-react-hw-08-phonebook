import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "components/AppBar";
import Container from "components/Container";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authOperations, authSelectors } from "redux/auth";

const HomeView = lazy(() => import("views/HomeView"));
const RegisterView = lazy(() => import("views/RegisterView"));
const LoginView = lazy(() => import("views/LoginView"));
const Phonebook = lazy(() => import("Phonebook"));

export default function App() {
  const dispatch = useDispatch();

  // const isRefreshing = useSelector(authSelectors.getIsFetchingCurrentUser);

  // console.log(isRefreshing);

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
          {/* <Route path="/contacts" component={ContactsView} /> */}
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Phonebook />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
}
