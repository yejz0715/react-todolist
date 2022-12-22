import React from "react";
import { useState } from "react";
import { userApi } from "react";
const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [radioType, setRadioType] = useState("login");
  const [msg, setMsg] = useState("");
  // 라디오 버튼이 변경됐을 때 값을 변경하기 위한 함수
  const handleOnChangeRadioButton = (e) => {
    const { value } = e.target;
    setRadioType(value);
  };

  // 입력창 내용을 저장하기 위한 함수
  const handleOnChangeInput = (e) => {
    const { id, value } = e.target;
    if (id === "email") setUser({ ...user, email: value });
    else if (id === "password") setUser({ ...user, password: value });
  };

  // 라디오 타입에 따라 로그인할지 회원가입할지 정하는 함수
  const handleOnClickButton = (e) => {
    // 새로고침 막는거
    e.preventDefault();

    // 로그인이면 로그인 함수 호출, 회원가입이면 회원가입 호출
    if (radioType === "signUp") handleSignUp();
    else if (radioType === "signIn") handleSignIn();

    // reset
    setUser({
      email: "",
      password: "",
    });
  };

  // 회원가입
  const handleSignUp = async () => {
    console.log("회원가입");
    await userApi
      .signUp(user)
      .then(({ data }) => localStorage.setItem("token", data.access_token))
      .catch((error) => setMsg(error.response.data.message));
  };

  // 로그인
  const handleSignIn = async () => {
    await userApi
      .signIn(user)
      .then(({ data }) => localStorage.setItem("token", data.access_token))
      .catch((error) => setMsg(error.response.data.message));
  };

  return (
    <div id="auth">
      <input
        name="radioType"
        type="radio"
        value="signIn"
        id="signIn"
        onChange={handleOnChangeRadioButton}
        defaultChecked
      />
      <label htmlFor="signIn">로그인</label>
      <input
        name="radioType"
        type="radio"
        value="signUp"
        id="signUp"
        onChange={handleOnChangeRadioButton}
      />
      <label htmlFor="signUp">회원가입</label>

      <form method="POST">
        ID:{" "}
        <input
          id="email"
          type="email"
          value={user.email}
          placeholder="enter email"
          onChange={handleOnChangeInput}
        />
        <br />
        PW:{" "}
        <input
          id="password"
          type="password"
          value={user.password}
          placeholder="enter password"
          onChange={handleOnChangeInput}
        />
        <br />
        <input
          type="submit"
          value={radioType === "signIn" ? "로그인" : "회원가입"}
          onClick={handleOnClickButton}
        />
      </form>
      {msg !== "" ? <label>{msg}</label> : null}
    </div>
  );
};

export default SignUp;
