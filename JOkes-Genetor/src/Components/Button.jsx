// import React from "react";

// const Button = (props) => {
//   return (
//     <div className=" bg-slate-500">
//       <button onClick={props.callApi}> random joke generator</button>
//     </div>
//   );
// };

// export default Button;

import React from "react";
const Button = (props) => {
  return (
    <div className="rounded-sm bg-yellow-600 p-20 mx-96 text-2xl">
      <button onClick={props.callApi}> Genrate</button>
    </div>
  );
};
export default Button;
