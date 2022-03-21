import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Cards from "./components/Cards";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import useAuth from "./PrivateRoute/useAuth";

function App() {
  const [isAuth, login, logout, isAdmin, makeAdmin, revokeAdmin] =
    useAuth(false);

  return (
    <div>
      <h1>
        Hello.. Welcome to Sridhar Workout on Protected Route - React Router
        version 6
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
      </ul>
      {isAuth ? (
        <>
          <div>You are logged in</div>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <div>You are logged out</div>
          <button onClick={login}>Login</button>
        </>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/accounts"
          element={
            <PrivateRoute auth={isAuth}>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/cards"
          element={
            <PrivateRoute auth={isAuth}>
              <Cards />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
