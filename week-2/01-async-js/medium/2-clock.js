let seconds = 0;
let minutes = 0;
let hours = 0;

function clock() {
	seconds++;
	if (seconds > 59) {
		seconds = 0;
		minutes++;
	}
	if (minutes > 59) {
		minutes = 0;
		hours++;
	}
	if (hours > 11) hours = 0;

	console.log(
		`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes
		}:${seconds < 10 ? '0' + seconds : seconds} ${hours > 11 ? 'PM' : 'AM'}`
	);
}

setInterval(clock, 1000);