import React from "react";
import { connect } from "react-redux";
import { updateInput } from "../actions";
import axios from "axios";

const onSubmitSearchTerm = ({ term }) => {
  axios
    .post("http://localhost:3000/", {
      user: term
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(updateInput(input.value));
          setTimeout(() => {
            console.log("sent");
            onSubmitSearchTerm();
          }, 3000);
          input.value = "";
        }}
        className="ui form"
      >
        <div className="field">
          <label htmlFor="user">Search Users</label>
          <div className="ui left icon input fluid">
            <i className="users icon" />
            <input ref={node => (input = node)} placeholder="Search users..." />
            <button type="submit" className="ui submit button">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    term: state.term
  }
}

export default connect(mapStateToProps)(SearchBar);
