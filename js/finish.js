/* 현재시간 */

const clock = document.getElementById("clock");

function getClock() {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초

  clock.innerText =
    year +
    "/" +
    month +
    "/" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
}
getClock();
setInterval(getClock, 1000);

/* time box */

function getParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var data = getParameter("data");
if (data == "" || data == null) {
  data = 0;
}

document.getElementById("result").innerText = data;

/* data값 숨기기 */
history.replaceState({}, null, location.pathname);

/* 로컬 따오기 */
const lineBlank = localStorage.getItem("Name");

document.querySelector("p").innerText = lineBlank;

/* 이미지 */
document.getElementById("result_img").src = testimg();

function testimg() {
  var img_src;
  if (data < 1000) {
    img_src = "img/img_sad.png";
    return img_src;
  } else data >= 1000;
  img_src = "img/img_happy.png";
  return img_src;
}
