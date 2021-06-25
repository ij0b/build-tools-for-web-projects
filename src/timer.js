import "./howler.core.min.js";
import audioName from "./audio/timerSound.mp3";
export const timerToHtml = currentTime => `
    <span> 
        ${'Текущее время: '+currentTime} 
    </span>
`;

export const timerSound = () =>{
	let timerSound = new Howl({
		src: [audioName]
	}).play();
}