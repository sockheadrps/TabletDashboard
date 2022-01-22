let btns = document.getElementsByClassName("button");
for (var i=0; i < btns.length; i++){
  console.log(btns)
    let btn = btns[i]
    let func = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `${btn.id}`);
        xhr.onload = () => {
            if(xhr.status == 200)
                console.log(xhr.responseText);
            else
                console.log(xhr.statusText);
        }
        xhr.send();
    }
    btns[i].addEventListener('click', func);
}


var slider = document.getElementById("volume");
var output = document.getElementsByClassName("slider-value");
output.innerHTML = slider.value;

slider.onmouseup = function(){
  console.log(slider.value)
  let xhr = new XMLHttpRequest();
        xhr.open("POST", `volume`);
        xhr.onload = () => {
            if(xhr.status == 200)
                console.log(xhr.responseText);
            else
                console.log(xhr.statusText);
        }
        xhr.send(JSON.stringify({"volume": parseInt(slider.value)}));
}


// function updateSlider(val, set) {
//   let span = val.childNodes[2];
//   let input = val.childNodes[1];
//   input.oninput = function() {
//       span.innerText=input.value;
//   };
//   if(set === null) {
//       input.oninput();
//   }
//   else {
//       input.value = set;
//       span.innerText = set;
//   }
//   input.onmouseup = function() {
//       let {id, value} = input;
//       console.log(id);
//       socket.send(JSON.stringify({event: "UPDATE_VOLUME", name: id, value: parseInt(value)}));
//   };
// }


// window.onload=function(){
// console.log("onload")
// }

// let gyazobtn = document.getElementById("gyazo");
// let gyazofunc = () => {
//       socket.send(JSON.stringify({event: "gyazo"}));
//     }
// gyazobtn.addEventListener('click', gyazofunc);

// let calculatorbtn = document.getElementById("calculator");
// let calculatorfunc = () => {
//       socket.send(JSON.stringify({event: "calculator"}));
//     }
// calculatorbtn.addEventListener('click', calculatorfunc);

// let googlebtn = document.getElementById("google");
// let googlefunc = () => {
//       socket.send(JSON.stringify({event: "google"}));
//     }
// googlebtn.addEventListener('click', googlefunc);

// let youtubebtn = document.getElementById("youtube");
// let youtubefunc = () => {
//       socket.send(JSON.stringify({event: "youtube"}));
//     }
// youtubebtn.addEventListener('click', youtubefunc);

// let spotifybtn = document.getElementById("spotify");
// let spotifyfunc = () => {
//       socket.send(JSON.stringify({event: "spotify"}));
//     }
// spotifybtn.addEventListener('click', spotifyfunc);

// let facebookbtn = document.getElementById("facebook");
// let facebookfunc = () => {
//       socket.send(JSON.stringify({event: "facebook"}));
//     }
// facebookbtn.addEventListener('click', facebookfunc);

// let instagrambtn = document.getElementById("instagram");
// let instagramfunc = () => {
//       socket.send(JSON.stringify({event: "instagram"}));
//     }
// instagrambtn.addEventListener('click', instagramfunc);



// Update the current slider value (each time you drag the slider handle)
// document.addEventListener("DOMContentLoaded", function() {
//   let volume_slider = document.getElementById("volume");
//   console.log("loaded");
//   let sounds_slider = document.getElementById("volume");
//   updateSlider(sounds_slider);
// });


