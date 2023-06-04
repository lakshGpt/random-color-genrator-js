const button = document.querySelector(".changeColorBtn");
const body = document.body;
const currColor = document.querySelector(".currentColor")
// console.log(currColor);

button.addEventListener("click",(e)=>{
    const red = Math.ceil(Math.random()*256);
    const green = Math.ceil(Math.random()*256);
    const blue = Math.ceil(Math.random()*256);
    const rgb = `rgb(${red},${green},${blue})`;
    // console.log(rgb);
    body.style.backgroundColor = rgb;
    button.style.backgroundColor = rgb;
    if(red && green && blue){
        button.style.color = "black";
    }
    currColor.innerText = rgb;
    // automatically copy the color code and now u can paste to notepad 
    navigator.clipboard.writeText(rgb);     
});

