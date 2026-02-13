// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Bé Ngọc Valentine vui vẻ nhó! Chúc em một ngày thật ấm áp, thật nhiều niềm vui, luôn xinh đẹp và hạnh phúc nhá. Mong hôm nay và những ngày sau mọi điều tốt đẹp nhất sẽ đến với em. Happy Valentine's Day baoboiii <3";

durationWrite = 50;


function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
