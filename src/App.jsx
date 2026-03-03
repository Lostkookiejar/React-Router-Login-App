import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";

//index.js
import { Home, Login, Dashboard } from "./pages";
import RequireAuth from "./components/RequireAuth";
//UserContext.js
import UserContext from "./pages/UserContext";

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />

          <Route element={<Login />} path="/login" />

          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
