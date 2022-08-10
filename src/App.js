import "./App.css";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Dropdown from "./components/Dropdown";
import React from "react";

function App() {
  const [username, setUsername] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const [filter, setFilter] = React.useState("");

  return (
    <div className="App">
      <header>
        <SearchBar></SearchBar>
        <div
          id="dropdown-container"
          className="d-flex flex-row justify-content-start"
        >
          <Dropdown
            title="Sort"
            buttonName={[
              "A to Z (First Name)",
              "A to Z (Last Name)",
              "Z to A (First Name)",
              "Z to A (Last Name)",
            ]}
          ></Dropdown>
          <Dropdown
            title="Filter"
            buttonName={["Online", "Offline"]}
          ></Dropdown>
        </div>
      </header>
      <div className="d-flex flex-row justify-content-start flex-wrap">
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
