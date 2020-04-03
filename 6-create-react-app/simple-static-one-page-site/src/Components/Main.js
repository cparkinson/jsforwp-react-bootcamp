import React from "react";

const H2header = (
  <h2>JSX elements with component architecture using create_react_app</h2>
);

const Image = <img src="chalk-drawing.jpg" alt="You're going to be ok" />;

const Quote = (
  <blockquote>
    Hello babies. Welcome to Earth. It's hot in the summer and cold in the
    winter. It's round and wet and crowded. On the outside, babies, you've got a
    hundred years here. There's only one rule that I know of, babies - "God damn
    it, you've got to be kind."
  </blockquote>
);

const Citation = <cite>Kurt Vonnegut</cite>;

function Main() {
  return (
    <main>
      {H2header} {Image} {Quote} {Citation}
    </main>
  );
}

export default Main;
