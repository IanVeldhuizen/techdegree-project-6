document.addEventListener("DOMContentLoaded", function() { 

    const myVideo = document.querySelector('video');
    let myCaptions = document.querySelectorAll('p .text');

// Highlight captions===========================

    myVideo.ontimeupdate = () => {
        for (let i = 0; i < myCaptions.length; i++){
                let timeStamp = myVideo.getCurrentTime();
                let timeStart = myCaptions[i].getAttribute('data-start');
                let timeEnd = myCaptions[i].getAttribute('data-end');
                    if (timeStamp > timeStart & timeStamp < timeEnd){
                        myCaptions[i].style.color = "#e5a01e";
                    } else {
                        myCaptions[i].style.color = "";
                    }
            }
    };

//click caption to move to video location

    for (let i = 0; i < myCaptions.length; i += 1){
        	myCaptions[i].addEventListener('click', (click) => {
        		let timeClick = click.target.getAttribute("data-start");
        		myVideo.setCurrentTime(timeClick);
        	});
          }

});
