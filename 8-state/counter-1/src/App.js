import React, { useState } from "react";
import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1>DIY Counter</h1>
      <h2>{props.count}</h2>
    </header>
  );
};

const Button = (props) => {
  return <button onClick={props.onChange}>{props.text}</button>;
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3> click {count} times</h3>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button onClick={() => setCount(0)}>Reset to 0</button>
    </>
  );
}

/*
// Class-based counter
class App extends React.Component {
  state = {
    count: 0,
  };

  increment = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = (e) => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = (e) => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <Header count={this.state.count} />
        <Button text="+" onChange={this.increment} />
        <Button text="-" onChange={this.decrement} />
        <Button text="0" onChange={this.reset} />
      </>
    );
  }
}
*/

//for the functional counter
class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}
export default App;
