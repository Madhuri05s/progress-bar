let progressBar = document.querySelector(".circular-progress");
let valueCont = document.querySelector(".value-cont");
let btn = document.querySelector("#btn");
let output = document.querySelector(".output");

btn.addEventListener("click", () => {
	let progressVal = 0;
	let progressEndVAL = 100;
	let speed = 150;

	let progress = setInterval(() => {
		progressVal++;
		valueCont.textContent = `${progressVal}%`;
		progressBar.style.background = `conic-gradient(#4d5bf9 ${progressVal * 3.6}deg, #cadcff ${progressVal * 3.6}deg)`;

		if (progressVal == progressEndVAL) {
			clearInterval(progress);
			output.textContent = "Process Completed";
            output.style.fontSize="30px";
            output.style.fontWeight="500";
            output.style.color="blue";

		}
	}, speed);
});
