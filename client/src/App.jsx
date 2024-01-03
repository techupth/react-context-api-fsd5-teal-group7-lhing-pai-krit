import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/UserContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  // const [user, setUser] = useState([]);

  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <UserContext.Provider
      value={{
        userState: userData,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage userState={userData} />} />
            <Route
              path="/product/view/:id"
              element={<ViewProductPage userState={userData} />}
            />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
