const counter = () => {
	let second = 0, hour = 0, minute = 0;
	setTimeout(function update() {
		if (second === 60) {
			minute++;
			second = 0
		}
		if (minute === 60) {
			hour++;
			minute = 0
		}
		console.log("==>", hour, ":", minute, ":", second)
		second++;

		setTimeout(update, 1000)

	}, 1000)

}

counter()