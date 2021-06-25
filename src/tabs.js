export function tabs(){
	let btn = document.querySelectorAll("[data-tabs-btn]");
	btn.forEach(function (tabBtn) {
		tabBtn.addEventListener("click", () => {
			let group = tabBtn.getAttribute("data-tabs-group");
			let btn = tabBtn.getAttribute("data-tabs-btn");
			let tab = document.querySelector("[data-tabs-group = "+group+"][data-tabs-in =  "+btn+"]");
			document.querySelectorAll("[data-tabs-group = "+group+"].act").forEach(function (tabEl){
				tabEl.classList.remove('act');
			});
			tabBtn.classList.add("act");
			tab.classList.add("act");
		});
	});	
}