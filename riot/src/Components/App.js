import React from "react";
import SearchBar from "../Container/SearchBar";
import RenderList from "../Container/RenderList";

class App extends React.Component {
  state = {
    matches: []
  };

  render() {
    return (
      <div className="ui container center aligned">
        <SearchBar />
        <RenderList />
      </div>
    );
  }
}

export default App;
