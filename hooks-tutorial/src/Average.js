import React, { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback 을 통해 만들어 놨던 함수를 재사용함으로서 성능을 최적화 할 수 있음
  const onChangeInput = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsertNumber = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    // number 혹은 list가 바뀌었을 때만 함수 생성
    [number, list]
  );

  // 두 번째 인자에 넣어준 배열의 값이 바뀔때만 함수가 실행됨
  // 그렇지 않으면 이전에 연산했던 결과를 다시 사용함으로서 성능을 최적화 할 수 있음
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChangeInput}></input>
      <button onClick={onInsertNumber}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
