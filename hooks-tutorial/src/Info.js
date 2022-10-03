import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // 컴포넌트가 렌더링 된 직후에 수행하는 작업
  useEffect(() => {
    console.log("effct");
    console.log("name = " + name);

    // cleanup func
    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 수행할 작업
    return () => {
      console.log("cleanup");
      console.log("name = " + name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
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
