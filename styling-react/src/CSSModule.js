import React from "react";
import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

// 미리 styles에서 클래스를 받아 오도록 설정
const cx = classNames.bind(styles);

const CSSModule = () => {
  // CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 key-value 형태의 객체를 받아옴
  // ex) { wrapper: "CSSModule_wrapper__TWsLA" }
  console.log(styles);

  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
