import React from "react";
import "./styles.css";

const ActionMenu = () => {
  return (
    <div>
      <select class="ui dropdown menu">
        <option selected value="All">
          All
        </option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
      </select>
    </div>
  );
};

export default ActionMenu;
