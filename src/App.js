import "./App.css";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar></SearchBar>
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
      </header>
    </div>
  );
}

export default App;
