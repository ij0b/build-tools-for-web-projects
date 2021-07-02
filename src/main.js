import { loadScript } from "./load.js";
import { tabs } from "./tabs.js";
import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timerToHtml, timerSound } from "./timer.js";

//П О Д Г Р У З К А скрипта a.js -> b.js -> c.js
loadScript(["src/a.js"],()=>{
	console.log('callback: a.js loaded');
});

//++Т Е С Т различных входных параметров
//loadScript("src/a.js"); 
//loadScript(["src/a.js","src/b.js"]);
//loadScript(() => {
//	console.log('callback');
//}); 
//loadScript("src/a.js", () => {
//	console.log('a.js loaded');
//}); 
//loadScript(["src/a.js","src/b.js"], () => {
//	console.log('a.js b.js loaded');
//}); 
//--Т Е С Т различных входных параметров

//Т А Б Ы
tabs();

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
    }
}

const timerForm = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");
let timerStart = true;
let timerTime;
let timerInterval;
let timerCurrentTime = 0;
timerForm.addEventListener("submit", handleTimer);

function handleTimer(event) {
    event.preventDefault();
	let inputTimerTime = this.querySelector("[name = timerTime]");
	if(event.submitter.name == "timerStart" &&
		timerStart == true){
		timerStart = false;
		clearInterval(timerInterval);
		timerTime = inputTimerTime.value;
		if (timerTime) {
			inputTimerTime.setAttribute("readonly","readonly");
			timerResult.innerHTML = timerToHtml(timerCurrentTime);
			timerInterval = setInterval(()=>{
				timerResult.innerHTML = timerToHtml(++timerCurrentTime);
				if(timerCurrentTime >= timerTime){
					timerSound();
					clearInterval(timerInterval);
					inputTimerTime.removeAttribute("readonly");
				}
			},1000);
		} else {
			timerResult.innerHTML = formatError("Для запуска таймера выберите время"); // 5
			timerStart = true;
		}		
	}else if(event.submitter.name == "timerStop"){
		clearInterval(timerInterval);
		if(timerCurrentTime < timerTime){
			timerStart = true;
			inputTimerTime.removeAttribute("readonly");
		}
	}else if(event.submitter.name == "timerUpdate"){
		clearInterval(timerInterval);
		timerResult.innerHTML = "";
		timerCurrentTime = 0;
		timerStart = true;
	}
}