const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn1 = document.getElementById("btn1");
const color = document.querySelector(".color");
 
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
//hex variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn2 = document.getElementById("btn2");
function getRandomHexNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  
if (btn1 == undefined){
    btn2.addEventListener("click", function () {
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
          hexColor += hex[getRandomHexNumber()];
        }
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
      });
      
}else(
    btn1.addEventListener("click", function () {
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
      })
)


