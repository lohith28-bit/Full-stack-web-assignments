// const time = ()=>{
// 	setInterval(()=>{
// 		const date = new Date();
// 		let hour = date.getHours() %12
// 		let minute = date.getMinutes()
// 		let second = date.getSeconds()
// 		console.log(hour+':'+minute+':'+second)
// 	},2000)
// }

// time()

const counter = () => {
	let second = 0, hour = 0, minute = 0;
	setInterval(() => {
		if (second === 60) {
			minute++;
			second = 0
		}
		if (minute === 60) {
			hour++;
			minute = 0
		}
		console.log(hour, ":", minute, ":", second)
		second++;
	}, 1000)

}

counter()