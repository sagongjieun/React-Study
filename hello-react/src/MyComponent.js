import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "홍길동",
    age: 25,
    favoriteColor: "red",
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    favoriteColor: PropTypes.string.isRequired,
  };

  render() {
    const { name, age, favoriteColor, children } = this.props;

    return (
      <div>
        <div>안녕하세요. 제이름은 {name}입니다.</div>
        <div>나이는 {age}입니다.</div>
        <div>최애 컬러는 {favoriteColor}입니다.</div>
        <div>child는 {children}입니다.</div>
      </div>
    );
  }
}

export default MyComponent;
