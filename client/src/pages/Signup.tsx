import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const data = await registerUser(email, password);
    alert(data.message);

    if (data.message === "Registration successful") {
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <h2>Sign up</h2>
      
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
        <button className="action-btn" onClick={handleSignup}>Register </button>
      </div>
    </div>
  );
}

export default Signup;