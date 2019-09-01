import React from "react";
import { connect } from "react-redux";

const RenderList = ({ term }) => {
  return <div>{term}</div>;
};

const mapStateToProps = state => {
  return {
    term: state.term
  };
};

export default connect(mapStateToProps)(RenderList);