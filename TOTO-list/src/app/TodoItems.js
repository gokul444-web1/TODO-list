import React, { Component } from "react";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key}>
        <div>
          <input className="checkbox1" type="checkbox" />
          <label>{item.text}</label>
          <span> </span>
          <button onClick={() => this.props.deleteItem(item.key)}>x</button>
        </div>
      </li>
    );
  };
 
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
