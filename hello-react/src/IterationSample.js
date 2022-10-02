import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");

  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onDoubleClickRemove(name.id)}>
      {name.text}
    </li>
  ));

  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };
  const onClickAddButton = (e) => {
    // 리액트의 성능 최적화를 위해 push대신 concat으로 기존 배열은 그대로 둔 채 새로운 배열로 만들어주기 (불변성 유지)
    const addedNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(addedNames);
    setInputText("");
  };
  const onKeyPressInputText = (e) => {
    if (e.key === "Enter") onClickAddButton();
  };
  const onDoubleClickRemove = (id) => {
    const filteredNames = names.filter((name) => name.id !== id);
    setNames(filteredNames);
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeInputText}
        onKeyPress={onKeyPressInputText}
      ></input>
      <button onClick={onClickAddButton}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
