import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function AppHeader() {
  const userData = useContext(UserContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.userState.username}</h2>
    </div>
  );
}

export default AppHeader;
