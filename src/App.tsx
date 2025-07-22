import { useState } from "react";
import CustomButton from "./CustomButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Vite + Vitest (and testing-library) + React + Mui7 + Styled-components
      </h1>
      <CustomButton
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count is {count}
      </CustomButton>
    </>
  );
}

export default App;
