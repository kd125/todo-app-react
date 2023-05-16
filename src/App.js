import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      inputValue: "",
      todos: [],
    };
  }

  onClickHandler = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  onChangeHandler = ({ target }) => {
    console.log(target.value);
    this.setState({
      text: target.value,
    });
  };

  onAddTodoClick = () => {
    this.setState({
      todos: [this.state.text, ...this.state.todos],
    });
    console.log(this.state);
  };

  handleDelete = (idx) => {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== idx),
    });
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.onClickHandler}>
          {this.state.isClicked ? "It is Clicked!" : "It is Not Clicked!"}
        </button>
        <br />
        <input type="text" onChange={this.onChangeHandler}></input>
        <p>{this.state.text}</p>
        <button type="button" onClick={this.onAddTodoClick}>
          Add Todo
        </button>
        {this.state.todos.map((todo, idx) => {
          return (
            <li key={idx}>
              {todo}
              <button type="button" onClick={() => this.handleDelete(idx)}>
                Delete
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
