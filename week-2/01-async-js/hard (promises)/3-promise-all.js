/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("HEllo from 1");
			resolve()
		}, 1000)
	})

}

function waitTwoSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("HEllo from 2");
			resolve()
		}, 2000)
	})
}

function waitThreeSecond() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("HEllo from 3");
			resolve()
		}, 3000)
	})
}

async function calculateTime() {
	let time = new Date().getSeconds()
	console.log('Time Started', time);
	await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
	let time1 = new Date().getSeconds()
	let count;
	time1 < time ? count = 60 - time + time1 : count = time1 - time
	console.log(count);
}

calculateTime()