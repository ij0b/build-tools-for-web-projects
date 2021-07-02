import { loadScript } from "./load.js"; // 1

loadScript("src/howler.js", () => {
	console.log('howler.js loaded');
}); 

export const timerToHtml = currentTime => `
    <span> 
        ${'Текущее время: '+currentTime} 
    </span>
`;

export const timerSound = () =>{
	let timerSound = new Howl({
		src: ['src/audio/timerSound.mp3']
	}).play();
}