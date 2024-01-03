import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
import { userDataContext } from "./Context/userDataContext.jsx";
function App() {
  //1. สร้าง component / state
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      {/*3. นำ userDataContext ไปครอบส่วนที่ต้องการจะใช้ context ร่วมกัน จากนั้น ใส่ value => componnent ที่สร้างขึ้น (userData) */}
      <userDataContext.Provider value={{ user: userData }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </userDataContext.Provider>
    </div>
  );
}

export default App;
