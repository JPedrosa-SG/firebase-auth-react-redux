import "./App.css";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { useDispatch } from "react-redux";
import { userLogin } from "./actions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Employees from "./pages/Employees/Employees";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        window.localStorage.setItem("isLoggedIn", true);
        dispatch(userLogin(currentUser?.email));
      }
      if (!currentUser) window.localStorage.setItem("isLoggedIn", false);
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/employees"
            element={
              <PrivateRoute>
                <Employees />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
