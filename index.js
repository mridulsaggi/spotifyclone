console.log("dekhle")
let index = 0;
let audioelem = new Audio("./songs/0.mp3");
let progressbar = document.getElementById("progressbar")
let btn = document.getElementById("f");
let gif = document.getElementById("soundgif");
let textii=document.getElementById("textii");
let tog=document.getElementsByClassName("ha");
let previousind=index;
let songlist = Array.from(document.getElementsByClassName("list"));
let song = [
    { name: "SO HIGH", filepath: "./songs/0.mp3", coverpath: "./covers/0.jpg" },
    { name: "MAAN MERI JAAN", filepath: "./songs/1.mp3", coverpath: "./covers/1.jpg" },
    { name: "KESARIYA", filepath: "./songs/2.mp3", coverpath: "./covers/2.jpg" },
    { name: "HUMSAFAR", filepath: "./songs/3.mp3", coverpath: "./covers/3.jpg" },
    { name: "BAARISHEN", filepath: "./songs/4.mp3", coverpath: "./covers/4.jpg" },
    { name: "GAAL NI KADNI", filepath: "./songs/5.mp3", coverpath: "./covers/5.jpg" },
    { name: "KALESH", filepath: "./songs/6.mp3", coverpath: "./covers/6.jpg" },
    { name: "BORN TO SHINE", filepath: "./songs/7.mp3", coverpath: "./covers/7.jpg" },
    { name: "SAB FADDE JANGE", filepath: "./songs/8.mp3", coverpath: "./covers/8.jpg" },
    { name: "YAAR BATHERE", filepath: "./songs/9.mp3", coverpath: "./covers/9.jpg" },
    { name: "HIGH HEELS", filepath: "./songs/10.mp3", coverpath: "./covers/10.jpg" },
    { name: "ILLEGAL WEAPON", filepath: "./songs/11.mp3", coverpath: "./covers/11.jpg" },


]
songlist.forEach((element, i) => {
    // console.log(element)
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    element.getElementsByClassName("name")[0].innerHTML = song[i].name;
    // element.getElementsByClassName("time")[0].innerHTML=song[i].name;
    // element.getElementsByClassName("listr")[0].innerHTML=song[i].audioelem.duration;
})
btn.addEventListener("click", () => {
    // console.log("hii");
    if (audioelem.paused || audioelem.currentTime == 0) {
        audioelem.play();
        btn.classList.add("pause");
        gif.style.opacity = 1;
        btn.classList.remove("play");
        let gg=document.getElementById(`${index}`);
        // console.log(gg)
        gg.classList.remove("hoverplay")
        gg.classList.add("pauseplay")

    }
    else {
        btn.classList.add("play");
        gif.style.opacity = 0;
        btn.classList.remove("pause");
        audioelem.pause();
        let gg=document.getElementById(`${index}`);
        // console.log(gg)
        gg.classList.add("hoverplay")
        gg.classList.remove("pauseplay")
        // tog.classList.remove("pauseplay")
        // tog.classList.add("hoverplay")
    }
})
let makeallplays = () => {
    const hello = Array.from(document.getElementsByClassName("ha"))
    hello.forEach((element) => {
        // console.log("hi");

        element.classList.remove("pauseplay");
        element.classList.add("hoverplay");

    });
}
let subplaylist = Array.from(document.getElementsByClassName("hoverplay"));
subplaylist.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (element.classList.contains("hoverplay")) {
            makeallplays();
            index = parseInt(e.target.id)
            // console.log(e.target);
            e.target.classList.add("pauseplay");
            e.target.classList.remove("hoverplay"); //these toggling that particular btn when clicked
            audioelem.src = `./songs/${index}.mp3`;
            // console.log("ji")
            textii.innerHTML=song[index].name;
            audioelem.currentTime = 0;
            audioelem.play();
            // textii[0].innerHTML = song[i].name
            btn.classList.add("pause");
            gif.style.opacity = 1;
            btn.classList.remove("play");
        }
        else {

            e.target.classList.remove("pauseplay");
            e.target.classList.add("hoverplay"); //these toggling that particular btn when clicked
            audioelem.pause();
            btn.classList.remove("pause");
            gif.style.opacity = 0;
            btn.classList.add("play");
        }
    })
})
audioelem.addEventListener("timeupdate", () => {
    // console.log(timeupdate);
    progress = parseInt((audioelem.currentTime / audioelem.duration) * 100);
    // console.log(progress); 
    progressbar.value = progress;
})

progressbar.addEventListener("change", () => {
    audioelem.currentTime = (progressbar.value * audioelem.duration) / 100;
})

document.getElementById("next").addEventListener("click", (e) => {
    let gfg=document.getElementById(`${previousind}`);
        // console.log(gg)
        gfg.classList.add("hoverplay")
        gfg.classList.remove("pauseplay")
    if (index == 11) {
        index = 0;
    }
    else {
        index++;
    }
    // progress.value=0
    audioelem.src = `./songs/${index}.mp3`;
    audioelem.currentTime = 0;
    audioelem.play();
    let gg=document.getElementById(`${index}`);
        // console.log(gg)
        gg.classList.remove("hoverplay")
        gg.classList.add("pauseplay")
        previousind=index;
    btn.classList.add("pause");
    gif.style.opacity = 1;
    textii.innerHTML=song[index].name;
    btn.classList.remove("play");
})
document.getElementById("prev").addEventListener("click", (e) => {
    let gfg=document.getElementById(`${previousind}`);
        // console.log(gg)
        gfg.classList.add("hoverplay")
        gfg.classList.remove("pauseplay")
    if (index == 0) {
        index = 11;
    }
    else {
        index--;
    }
    let gg=document.getElementById(`${index}`);
        // console.log(gg)
        gg.classList.remove("hoverplay")
        gg.classList.add("pauseplay")
    audioelem.src = `./songs/${index}.mp3`;
    textii.innerHTML=song[index].name;
    audioelem.currentTime = 0;
    previousind=index;
    audioelem.play();
    btn.classList.add("pause");
    gif.style.opacity = 1;
    btn.classList.remove("play");
})
