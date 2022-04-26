const menuToggle = document.querySelector("div[class='toggle']");
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click',funkcja);
function funkcja(){
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
}

var modalG = document.getElementById("ModalC1");

var btnG = document.getElementById("C1");

var spanG = document.getElementsByClassName("closeC1")[0];

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

var modalS = document.getElementById("ModalC2");
var btnS = document.getElementById("C2");
var spanS = document.getElementsByClassName("closeC2")[0];

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

var modalH = document.getElementById("ModalC3");
var btnH = document.getElementById("C3");
var spanH = document.getElementsByClassName("closeC3")[0];

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

var modalD = document.getElementById("ModalC4");
var btnD = document.getElementById("C4");
var spanD = document.getElementsByClassName("closeC4")[0];

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

var modalJ = document.getElementById("ModalC5");
var btnJ = document.getElementById("C5");
var spanJ = document.getElementsByClassName("closeC5")[0];

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

var modalK = document.getElementById("ModalC6");
var btnK = document.getElementById("C6");
var spanK = document.getElementsByClassName("closeC6")[0];

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

var beepOne = $("#beepG")[0];
		$(".t1")
	.mouseenter(function() {
		beepOne.play();
	});

  var beepOne = $("#beepS")[0];
		$(".t2")
	.mouseenter(function() {
		beepOne.play();
	});

  var beepOne = $("#beepH")[0];
		$(".t3")
	.mouseenter(function() {
		beepOne.play();
	});

  var beepOne = $("#beepD")[0];
		$(".t4")
	.mouseenter(function() {
		beepOne.play();
	});

  var beepOne = $("#beepJ")[0];
		$(".t5")
	.mouseenter(function() {
		beepOne.play();
	});

  var beepOne = $("#beepK")[0];
		$(".t6")
	.mouseenter(function() {
		beepOne.play();
	});