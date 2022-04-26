// ---------------------------------------------------------------------------
//menu
const menuToggle = document.querySelector("div[class='toggle']");
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click',funkcja);
function funkcja(){
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
}
// ---------------------------------------------------------------------------

//modal box
var modalG = document.getElementById("ModalGdynia");

var btnG = document.getElementById("gdynia");

var spanG = document.getElementsByClassName("closeGdynia")[0];

btnG.onclick = function() {
  modalG.style.display = "block";
}

spanG.onclick = function() {
  modalG.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalG) {
    modalG.style.display = "none";
  }
}
//modal box
var modalS = document.getElementById("ModalSopot");
var btnS = document.getElementById("sopot");
var spanS = document.getElementsByClassName("closeSopot")[0];

btnS.onclick = function() {
  modalS.style.display = "block";
}

spanS.onclick = function() {
  modalS.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
}
//modal box
var modalH = document.getElementById("ModalHel");
var btnH = document.getElementById("hel");
var spanH = document.getElementsByClassName("closeHel")[0];

btnH.onclick = function() {
  modalH.style.display = "block";
}

spanH.onclick = function() {
  modalH.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalH) {
    modalH.style.display = "none";
  }
}
//modal box
var modalD = document.getElementById("ModalDebki");
var btnD = document.getElementById("debki");
var spanD = document.getElementsByClassName("closeDebki")[0];

btnD.onclick = function() {
  modalD.style.display = "block";
}

spanD.onclick = function() {
  modalD.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalD) {
    modalD.style.display = "none";
  }
}
//modal box
var modalJ = document.getElementById("ModalJastarnia");
var btnJ = document.getElementById("jastarnia");
var spanJ = document.getElementsByClassName("closeJastarnia")[0];

btnJ.onclick = function() {
  modalJ.style.display = "block";
}

spanJ.onclick = function() {
  modalJ.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalJ) {
    modalJ.style.display = "none";
  }
}
//modal box
var modalK = document.getElementById("ModalKolobrzeg");
var btnK = document.getElementById("kolobrzeg");
var spanK = document.getElementsByClassName("closeKolobrzeg")[0];

btnK.onclick = function() {
  modalK.style.display = "block";
}

spanK.onclick = function() {
  modalK.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalK) {
    modalK.style.display = "none";
  }
}
// ---------------------------------------------------------------------------

//dzwiek beep po najechaniu na kafelek
var beepOne = $("#beepG")[0];
		$(".t1")
	.mouseenter(function() {
		beepOne.play();
	});
//dzwiek beep po najechaniu na kafelek
  var beepOne = $("#beepS")[0];
		$(".t2")
	.mouseenter(function() {
		beepOne.play();
	});
//dzwiek beep po najechaniu na kafelek
  var beepOne = $("#beepH")[0];
		$(".t3")
	.mouseenter(function() {
		beepOne.play();
	});
//dzwiek beep po najechaniu na kafelek
  var beepOne = $("#beepD")[0];
		$(".t4")
	.mouseenter(function() {
		beepOne.play();
	});
//dzwiek beep po najechaniu na kafelek
  var beepOne = $("#beepJ")[0];
		$(".t5")
	.mouseenter(function() {
		beepOne.play();
	});
//dzwiek beep po najechaniu na kafelek
  var beepOne = $("#beepK")[0];
		$(".t6")
	.mouseenter(function() {
		beepOne.play();
	});
  // ---------------------------------------------------------------------------


  