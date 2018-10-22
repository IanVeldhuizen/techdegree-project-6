const myVideo = document.querySelectorAll('video');
let myCaptions = document.querySelectorAll('p .text');


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
