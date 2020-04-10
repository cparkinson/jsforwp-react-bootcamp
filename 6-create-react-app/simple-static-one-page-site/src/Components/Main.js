import React from "react";

const H2header = () => {
  return (
    <h2>JSX elements with component architecture using create_react_app</h2>
  );
};

const Image = () => {
  return <img src="chalk-drawing.jpg" alt="You're going to be ok" />;
};

const Quote = (props) => {
  console.log(props);
  return (
    <blockquote>
      Hello babies. Welcome to Earth. It's hot in the summer and cold in the
      winter. It's round and wet and crowded. On the outside, babies, you've got
      a hundred years here. There's only one rule that I know of, babies - "God
      damn it, you've got to be <b>{props.textToBe}</b>."
    </blockquote>
  );
};

const Citation = () => {
  return <cite>Kurt Vonnegut</cite>;
};

//Q: what goes inside the class and what goes outside it?
const InputField = (props) => {
  return (
    <input
      id={props.id}
      onChange={props.onChange}
      type="text"
      placeholder={props.label}
    />
  );
};

class Main extends React.Component {
  state = {
    textToBe: "kind",
  };

  handleText = (e) => {
    e.preventDefault();
    this.setState({ textToBe: e.target.value });
  };

  render() {
    return (
      <main>
        <H2header />
        <Image />
        <Quote textToBe={this.state.textToBe} />
        <Citation />
        <br />
        <InputField
          id="quality"
          label="What should you be?"
          onChange={this.handleText}
        />
      </main>
    );
  }
}

export default Main;
