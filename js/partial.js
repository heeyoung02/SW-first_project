function next_page() {
  location.href = "name.html";
}

/* footer */

const footer = document.querySelector("footer");
footer.innerText = `Copyrightⓒ ${new Date().getFullYear()} by team SW`;

/* 공유하기 */

function shareTwitter() {
  var sendText = ""; // 전달할 텍스트
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
