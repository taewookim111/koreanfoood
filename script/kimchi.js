const panel2 = document.querySelector(".panel2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lis = panel2.querySelectorAll("li");
const map = document.querySelector("#map")
const div = map.querySelectorAll("div");
const leftDiv = map.querySelector(".left");
const rightDiv = map.querySelector(".right");
const leftDiv1 = map.querySelector(".left1");
const rightDiv1 = map.querySelector(".right1");
const leftDiv2 = map.querySelector(".left2");
console.log(leftDiv);
let posArr = [];
let len = lis.length;
let lens = div.length;
console.log(lens);
enableClick = true;


init();

prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (enableClick) {
        prevSlide();
        enableClick = false;
    }
})

next.addEventListener("click", (e) => {
    e.preventDefault();
    if (enableClick) {
        nextSlide();
        enableClick = false;
    }
})

for(let el of div){
    posArr.push(el.offsetTop);
}
posArr.push(div[lens - 1].offsetTop + div[lens - 1].offsetHeight);
console.log(posArr);

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset
    || document.documentElement.scrollTop;
    console.log(scroll);
    let Num1 = 400;
    let Num2 = 200;
    if(scroll >= 0 && scroll <= posArr[0]){
        leftDiv.style.left = `${scroll - posArr[0] + 200}px`;
        rightDiv.style.right = `${scroll - posArr[0] - 800}px`;
    };
    if(scroll >= posArr[1] && scroll <= posArr[2] +  Num2){
        leftDiv1.style.left = `${scroll - posArr[2] + 200}px`;
       
    }
    if(scroll >= posArr[4] && scroll <= posArr[4] + Num1){
        leftDiv2.style.left = `${scroll - posArr[0] + 200}px`;
    }
});


function prevSlide() {
    new Anim(panel2, {
        prop: "left",
        value: "0%",
        duration: 800,
        callback: () => {
            panel2.style.left = "-100%";
            panel2.prepend(panel2.lastElementChild);
            enableClick = true;
        }
    })
}

function nextSlide() {
    new Anim(panel2, {
        prop: "left",
        value: "-200%",
        duration: 800,
        callback: () => {
            panel2.append(panel2.firstElementChild);
            panel2.style.left = "-100%";
            enableClick = true;
        }
    });
}

function init(){
    panel2.style.width = `${100 * len}%`;
    //ul의 너비값을 li의 갯수를 js가 세어서 자동 계산하는 코드
    lis.forEach((index) => {
    //각 li의 너비값을 자동으로 계산하는 코드
    index.style.width = `${100 / len}%`;
    })
    panel2.style.left = "-100%";
    panel2.prepend(panel2.lastElementChild);
    }