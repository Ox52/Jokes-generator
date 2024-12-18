// import React, { useState } from "react";

// import  Button  from "./Button";

// const Jokes = () => {
//   const [joke, setjoke] = useState("");

//   const fetchApi = () => {
//     fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
//       .then((res) => res.json())
//       .then((data) => setjoke(data.joke));
//   };

//   return (
//     <div className="bg-red-600">
//       <h1>hi jokes</h1>
//       <Button callApi={fetchApi} />
//       <p>{joke}</p>
//     </div>
//   );
// };

// export default Jokes;

import React, { useState } from "react";
import Button from "./Button";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="bg-yellow-500  text-center h-screen">
      <h1 className=" h-8 p-20 mx-96 text-xl">Generator Jokes for YOu</h1>
      <Button callApi={fetchApi} />
      <p className="p-16 text-4xl">{joke}</p>
    </div>
  );
};
export default Jokes;
