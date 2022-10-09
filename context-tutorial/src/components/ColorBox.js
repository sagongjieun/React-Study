import colorContext from "../contexts/color";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

// Consumer 사이에 중괄호를 열어서 함수를 넣음
// -> Function as a child
// -> Render Props

export default ColorBox;
