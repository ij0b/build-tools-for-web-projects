import { loadScript } from "./load.js"; 
loadScript('src/c.js',()=>{
	console.log('callback: c.js loaded');
});
