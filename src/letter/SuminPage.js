// src/letter/SuminPage.js
import React from "react";
import LetterPage from "./LetterPage";
import suminImage from '../images/sumin_char.jpg'; // 상대 경로로 수정

function SuminPage() {
  return (
    <LetterPage 
      title="Dear Sumin,"
      message="Sumin님, 항상 최선을 다해주셔서 감사합니다! 앞으로도 함께 멋진 일들을 만들어 나가길 바랍니다."
      imageSrc={suminImage} // Sumin의 이미지 전달
      recipient="Sumin"
    />
  );
}

export default SuminPage
