// src/letter/SuminPage.js
import React from "react";
import LetterPage from "./LetterPage.js";
import benImage from '../images/sumin_char.jpg'; // 상대 경로로 수정

function BenPage() {
  return (
    <LetterPage 
      title="Dear Ben,"
      message="벤, 안녕하세요! 소피입니다.

우리가 많은 대화를 나누거나 함께 식사할 기회는 많지 않았지만, 벤이 묵묵히 자신의 일을 해내며 완성한 영상들을 보면서 정말 대단하다는 생각을 많이 했어요. 저도 영화 쪽 일을 해봤기 때문에 그 과정이 얼마나 힘들고 어려운지 알기에, 더 큰 존경심이 들었습니다.

벤도 잘 아시겠지만, 조회수나 사람들의 반응에 따라 다양한 감정을 느끼셨을 것 같아요. 때로는 힘들 때도 있었을 거라 생각해요. 그래서 벤이 어떻게 이 길을 선택하게 되었고, 어떤 계기로 이 일을 시작하게 되었는지에 대해 더 많은 이야기를 나누고 싶었는데, 아쉽게도 그런 기회가 없었던 것 같네요.

제가 이렇게 윈들리를 떠나게 되지만, 언젠가 다시 만나 이야기를 나눌 날이 올 거라고 믿습니다. 그때까지 꼭 건강 잘 챙기시고, 커리어와 일상에서 원하는 모든 일들이 이루어지길 진심으로 바라요. 윈들리 유튜브 채널을 보면서 계속 응원할게요. 

진심으로 파이팅입니다!
"
      imageSrc={benImage} // Sumin의 이미지 전달
      recipient="Ben"
    />
  );
}

export default BenPage
