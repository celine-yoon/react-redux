import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";

function ToDo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
