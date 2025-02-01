import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Body } from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div data-theme="valentine">
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/landing" element={<LandingPage />}></Route>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
