import React from "react";
import "./App.css";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

class App extends React.Component {
  state = { count: 0 };

  decrement = (e) => {
    e.preventDefault();
    //don't return here
    //return this.setState({ count: this.state.count - 1 });
    this.setState({ count: this.state.count - 1 });
  };

  increment = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  reset = (e) => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="0" />
      </>
    );
  }
}

export default App;
