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

  const userList = users
    // eslint-disable-next-line array-callback-return
    ?.filter((item) => {
      if (
        item.name.first.toLowerCase().includes(username.toLowerCase()) ||
        item.name.last.toLowerCase().includes(username.toLowerCase())
      ) {
        return item;
      }
    })
    .map((user) => (
      <Profile
        key={`${user.name.first} ${user.name.last}`}
        profileImage={user.picture.large}
        userHandle={user.name.first}
        lastName={user.name.last}
      ></Profile>
    ));

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSortChange = (e) => {
    if (e.target.value === "A to Z (First Name)") {
      setUsers(users.sort((a, b) => a.name.first.localeCompare(b.name.first)));
    } else if (e.target.value === "A to Z (Last Name)") {
      setUsers(users.sort((a, b) => a.name.last.localeCompare(b.name.last)));
    } else if (e.target.value === "Z to A (First Name)") {
      setUsers(users.sort((a, b) => b.name.first.localeCompare(a.name.first)));
    } else if (e.target.value === "Z to A (Last Name)") {
      setUsers(users.sort((a, b) => b.name.last.localeCompare(a.name.last)));
    } else {
      setUsers(shuffle(users));
    }
    setSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://randomuser.me/api/?results=100");
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
              "None",
              "A to Z (First Name)",
              "A to Z (Last Name)",
              "Z to A (First Name)",
              "Z to A (Last Name)",
            ]}
            handleChange={handleSortChange}
          ></Dropdown>
          <Dropdown
            title="Filter"
            buttonName={["Online", "Offline"]}
            handleChange={handleFilterChange}
          ></Dropdown>
        </div>
      </header>
      <ul className="d-flex flex-row justify-content-start flex-wrap p-0">
        {userList}
      </ul>
    </div>
  );
}

export default App;
