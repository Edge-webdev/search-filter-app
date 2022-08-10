import "./App.css";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Dropdown from "./components/Dropdown";
import React, { useEffect } from "react";

function App() {
  const [username, setUsername] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const userList = users?.map((user) => (
    <Profile
      profileImage={user.picture.large}
      userHandle={user.name.first}
      lastName={user.name.last}
    ></Profile>
  ));

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const json = await response.json();
      setUsers(json.results);
    }
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <SearchBar username={username} handleChange={handleChange}></SearchBar>
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
        {userList}
      </div>
    </div>
  );
}

export default App;
