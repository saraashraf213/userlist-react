import React from "react";
import { users } from "./users";


function App() {
  return (
    <div className="App" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>User List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "250px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={user.profilePic}
              alt={user.username}
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>
              {user.verified ? (
                <span style={{ color: "green" }}>✔ Verified</span>
              ) : (
                <span style={{ color: "red" }}>✖ Not Verified</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
