// Події
import { useState } from "react";

import ButtonReactivity from "./ButtonReactivity";

const App1 = () => {
  //   const handleClick = () => {
  //     alert("I`m a button");
  //   };

  //   const handleClick1 = (evt) => {
  //     console.log(evt);
  //   };

  const CustomButton = ({ message, children }) => {
    return <button onClick={() => alert(message)}>{children}</button>;
  };

  const [clicks, setClicks] = useState(0);

  const handleClick2 = () => {
    clicks = clicks + 1;
  };

  return (
    // <button onClick={handleClick}>Click me!</button>

    // return <button onClick={() => alert("I`m a button")}>Click me!</button>
    // це анонімна інлайн іункція всередині JSX

    // <>
    //   <button onClick={handleClick1}>First btn</button>
    //   <button onClick={(evt) => console.log(evt)}>Second btn</button>
    //   </>
    //   в консолі виведе SyntheticBaseEvent

    <>
      <CustomButton message="Playing music!"> Play some music </CustomButton>
      <CustomButton message="Uploading your data!"> Upload data </CustomButton>
      <button onClick={handleClick2}>Current: {clicks}</button>
    </>
  );
};

export default App1;
