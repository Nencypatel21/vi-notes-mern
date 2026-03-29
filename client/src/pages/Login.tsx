import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await loginUser(email, password);
    alert(data.message);


    if (data.message === "Login successful") {
      navigate("/editor");
    }
  };

  return (
    <div className="container">
      <h2>Log in</h2>
      
      {/* <br /> */}
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="bottom-bar">
        <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
        <button className="action-btn" onClick={handleLogin}>Log in →</button>
      </div>
    </div>
  );
}

export default Login;