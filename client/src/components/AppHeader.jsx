import { useContext } from "react";
import { userDataContext } from "../Context/userDataContext";
// 4. import Hook "useContext" และ Context ที่เราใช้ร่วมกัน

function AppHeader() {
  // 5. Render ตัว useContext ในวงเล็บคือ context ที่เราสร้างขึ้น ใช้ข้อมูลจาก value ที่ใส่ลงไป
  const context = useContext(userDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      {/* 6. ใส่ข้อมูลลงไป .user คือ key ใน value .username คือ key ของ userData ที่อยู่ใน value */}
      <h2>สวัสดีคุณ {context.user.username}</h2>
    </div>
  );
}

export default AppHeader;
