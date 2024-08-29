// src/App.js
import React, { useState } from "react";
import { auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './App.css'; // 스타일시트 추가
import suminChar from './images/sumin_char.jpg'; // 이미지 파일 불러오기



function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // Google Provider 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        const email = data.user.email;
        
        if (email === "yoon@keke.cc") {
          navigate("/yoon");
        } else if (email === "sophie@windly.cc") {
          navigate("/ben");
        } else if (email === "john@keke.cc") {
          navigate("/john");
        } else {
          alert("윈들리 팀원들만 이용할 수 있어요!");
          auth.signOut(); // 로그아웃 처리
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
    <h3>윈들리, 고맙습니다!</h3>
    <img src={suminChar} alt="Sumin Character" className="character-image" /> {/* 이미지 추가 */}
    <h4>인턴 소피가 전하는 편지를 확인하세요.</h4>
    <button onClick={handleGoogleLogin}>👉 구글 로그인으로 시작하기 👈</button>
    <div>
      {userData
        ? "You are logged in as: " + userData.displayName
        : "윈들리 계정으로 로그인해주세요."}
    </div>
  </div>
);
}

export default App;
