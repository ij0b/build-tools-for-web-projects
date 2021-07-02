import { loadScript } from "./load.js"; 
loadScript('src/b.js',()=>{
	console.log('callback: b.js loaded');
});
loadScript('src/b.js',()=>{
	console.log('callback: b.js loaded');
});