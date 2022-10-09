import { createContext, useState } from "react";

// 파라미터에는 해당 context의 기본상태 저장
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor }, // 상태
    actions: { setColor, setSubcolor }, // 업데이트 함수
  };
  // 렌더링
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const ColorConsumer = ColorContext.Consumer;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
