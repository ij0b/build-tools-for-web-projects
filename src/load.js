export function loadScript(url, callback){
	
	if(typeof url == "function"){
		console.log('входной параметр url = '+url+' функции loadScript - функция');
		callback = url;
		callback();
		return false;
	}
	if(typeof url == "string"){
		console.log('входной параметр url = '+url+' функции loadScript - строка');
		appendScript(url,true);
		return false;
	}
	if(Array.isArray(url)){
		console.log('входной параметр url = '+url+' функции loadScript - массив');
		let lastScript = false;
		for(let i = 0; i<url.length; i++){
			if(i+1==url.length){
				lastScript = true;
			}
			appendScript(url[i],lastScript);
		}
	}
	
	function appendScript(currentUrl,lastScript){
		if(+document.querySelector("script[src = '"+currentUrl+"']") == 0){
			const element = document.createElement("script");
			element.type = "module";
			element.src = currentUrl;
			element.async = false;
			if(lastScript && typeof callback == "function"){
				element.onload = callback;
			}
			document.body.appendChild(element);
		}else{
			console.log("Файл - "+currentUrl+" уже загружен");
		}	
	}	
}