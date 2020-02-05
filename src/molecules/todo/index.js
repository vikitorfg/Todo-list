import React, { Component } from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import Text from "../../atoms/text";
import "./styles.css";

class Todo extends Component {
  render() {
    return (
      <div className="list-item">
        <Checkbox />
        <Text text="Todo" />
        <Icon name="pencil" />
        <Icon name="erase" />
      </div>
    );
  }
}

export default Todo;
