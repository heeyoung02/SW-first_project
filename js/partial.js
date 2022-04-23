function next_page() {
  location.href = "name.html";
}

/* footer */

const footer = document.querySelector("footer");
footer.innerText = `Copyrightⓒ ${new Date().getFullYear()} by team SW`;

/* 공유하기 */

function shareTwitter() {
  var sendText =
    "그(그녀)의 사랑의 수치가 궁금하다면? 사랑측정기를 사용 해 보세요!"; // 전달할 텍스트
  var sendUrl = "https://love-scaler.netlify.app/"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}
function shareFacebook() {
  var sendUrl = "https://love-scaler.netlify.app/"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

/* 카카오 공유하기 자바스크립트 */

function shareKakao() {
  Kakao.init("8b4a29b7bb1a16cd4f94a6ef7030f2c7");

  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "사랑 측정기", // 보여질 제목
      description: "나 얼만큼 사랑해? 물음에 대답대신 수치로 보여주세요!", // 보여질 설명
      imageUrl:
        "https://emojigraph.org/media/emojipedia/heart-on-fire_2764-fe0f-200d-1f525.png", // 콘텐츠 URL
      link: {
        mobileWebUrl: "https://love-scaler.netlify.app/",
        webUrl: "https://love-scaler.netlify.app/",
      },
    },
  });
}

//현재페이지 공유
