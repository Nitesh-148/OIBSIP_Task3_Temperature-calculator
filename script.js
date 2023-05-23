
		function calculate() {
			let degrees = document.getElementById("degrees").value;
			let type = document.getElementById("type").value;
			let result = "";
			
			if (type === "celsius") {
				let fahrenheit = (degrees * 9/5) + 32;
                fahrenheit= fahrenheit.toFixed(3);
				result=`${fahrenheit} °F.`;
			} else {
				let celsius = (degrees - 32) * 5/9;
                celsius= celsius.toFixed(3);
				result = `${celsius} °C.`;
			}
			
			document.getElementById("result").innerHTML = result;
		}