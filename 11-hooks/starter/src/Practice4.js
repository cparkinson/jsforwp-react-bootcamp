import React, { useState, useEffect } from "react";

const Practice4 = () => {
  /*
   * 1. Pull the fetch call out into it's own function fetchCat
   * 2. Call fetchCat on initial page load as done currently
   * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
   * 4. Make sure to cancel the timer when component is unmounted
   */

  const [catImg, setCatImg] = useState(``);

  /*
  passing an empty array as the second parameter
  This approach effectively makes the effect only run once on first render. 
  This happens since the empty array will not change, 
  therefor there is nothing to trigger the effect to run again 
  as there is in the previous example.
  */

  useEffect(() => {
    fetchCat();
  }, []);

  const fetchCat = () => {
    fetch(`https://aws.random.cat/meow`)
      .then((response) => response.json())
      .then((data) => setCatImg(data.file))
      .catch((error) => console.error(error));
  };

  //loop, breaks npm. runs continuously. also fetchPosts not a thin
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchPosts();
    }, 5000);
  });
  */

  //this one runs continuously, makes a timer, when it reaches 5 seconds it
  // fetches cat , restarts timer
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 second refresh`);
      fetchCat();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={catImg} alt="Random Cat Image" width="500" />
    </>
  );
};

export default Practice4;
