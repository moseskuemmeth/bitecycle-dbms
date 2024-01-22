import React from "react";
import "./App.css";
import Option from "../components/Option";

function Home() {
  const options = [
    { title: "share", id: 1 },
    { title: "pick up", id: 2 },
  ];
  return (
    <div className="home">
      <center>
        <h1
          style={
            //{color: '#07ad3c'}
            { color: "#52853a" }
          }
        >
          Welcome to BiteCycle
        </h1>
      </center>
      <center>
        <p>Join us and help contribute to our mission.</p>
      </center>
      <div className="home-options" style={{
        marginTop: 50,
        marginBottom: 10,
      }}>
        <h2>Would you like to...</h2>
      </div>
      <div className="home-options"  style={{
        marginTop: 20,
        marginBottom: 20,
      }}>
        <Option options={options} title="Would you like to..." />
      </div>
      <div className="home-options"  style={{
        marginBottom: 10,
      }}>
        <h2>food?</h2>
      </div>
    </div>
  );
}

export default Home;
