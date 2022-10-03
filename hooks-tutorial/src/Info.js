import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChangeInput] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeInput}></input>
        <input
          name="nickname"
          value={nickname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
