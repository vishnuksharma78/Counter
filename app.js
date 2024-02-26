let para = document.getElementById("para");
let btn = document.getElementById('btn');
let btn2 = document.getElementById("btn2") ;
let num = 0;
let timeStop ;
const showNum = () => {
timeStop =  setInterval(() => {
        para.innerHTML = `${num}`;
        para.classList.add("para")
        num++;
    }, 1000)
}
btn.addEventListener('click', showNum);
btn2.addEventListener('click',()=>{
    clearInterval(timeStop);
})
