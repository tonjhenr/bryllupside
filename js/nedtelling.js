
	function countdown(){
		var now = new Date();
		var eventDate = new Date(2017, 06, 11);

		var currentTiime = now.getTime();
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTiime;

		var s = Math.floor(remTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = Math.floor(h / 24);

		h %= 24;
		m %= 60;

		h = (h < 10) ? "0" + h : h;
		m = (m < 10) ? "0" + m : m;

		document.getElementById ("dager").textContent = d;
		document.getElementById ("dager").innerText = d;

		document.getElementById ("timer").textContent = h;
		document.getElementById ("minutter").textContent = m;

		setTimeout(countdown, 1000);
	
		}
		
		countdown();
