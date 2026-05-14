// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>This is my first React app</p>
//       <Cse12/>
//     </div>
//   );
// }
// // 2nd Component
// function Cse12(){
//   return (
//     <div className="Cse12">
//       <h2>Welcome to CSE 12</h2>
//       <p>This is some content for2nd Component</p>
//     </div>
//   );
// }
// export default App;

// import Student from "./Student";

// function App() {
//   return (
//     <div className="App">
//       <h1>Student Information</h1>
//       <Student name="Alice" course="CSE12" marks={85} />
//     </div>
//   );
// }
// export default App;

import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Student Registration Form
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;