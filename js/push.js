var status = 0;
function fn_down() {
  document.getElementById("bt_start").innerText = "테스트 중";
  document.getElementsByClassName("warning_font").innerText = "";
  status = 1;
  var count = 0;
  setInterval(function () {
    count++;
    document.getElementById("time").innerText = count;
  }, 500);
}

setInterval(function () {
  if (status == 1) {
    const rand1 = Math.floor(Math.random() * 60);
    document.getElementById("rand").innerText = rand1;
  }
}, 50);
function fn_up() {
  if (status == 1) {
    var cnt = document.getElementById("time").innerText;
    //alert(cnt);
    location.href = "finish.html?data=" + cnt;
  }
}
