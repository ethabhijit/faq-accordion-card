window.addEventListener("load", function() {
	const accordions = document.getElementsByClassName("accordion-btn");
	for(const accordion of accordions) {
		accordion.addEventListener("click", function() {
			const panel = this.nextElementSibling;
			const img = this.getElementsByTagName("img")[0];
			img.classList.toggle("rotate");
			this.classList.toggle("active");
			if(panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
});