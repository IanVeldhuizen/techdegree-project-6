
const myVideo = document.querySelectorAll('video');
let myCaptions = document.getElementsByTagName('span');


myVideo.ontimeupdate = () => {
    for (let i = 0; i = myCaptions.length; i++){
            let timeStamp = myVideo.getCurrentTime();
            let timeStart = myCaptions[i].getAttribute('data-start');
            let timeEnd = myCaptions[i].getAttribute('data-end');
                if (timeStamp > timeStart & timeStamp < timeEnd){
                    myCaptions[i].style.color = "black";
                } else {
                    myCaptions[i].style.color = "";
                }
        }
};

// Highlight captions===========================

// myVideo.addEventListener("ontimeupdate", () => {

// for (let i = 0; i = myCaptions.length; i++){
//     myVideo.getCurrentTime();
//     let timeStart = myCaptions[i].getAttribute('data-start');
//     let timeEnd = myCaptions[i].getAttribute('data-end');
//         if (myVideo > timeStart && myVideo < timeEnd){
//             myCaptions[i].style.color = "black";
//         } else {
//             myCaptions[i].style.color = "null";
//         }
// }

// });






//   // the video players jumps to the appropriate time when the user clicks on any sentence in the transcript
//   for (let i = 0; i < captions.length; i += 1){
// 	captions[i].addEventListener('click', (e) => {
// 		let dataStart = e.target.getAttribute("data-start");
// 		video.setCurrentTime(dataStart);
// 		video.play();
// 	});
//   }