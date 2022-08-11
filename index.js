const colors = ["#A8D8EA" , "#F07B3F" ,"#6FE7DD" , "#046582" , "#004A7C"]
const hexers = ["1","2" , "3", "4" , "5", "6" , "7", "8", "9", "A","B","C", "D","E","F"]

const but = document.getElementById("flp-btn");
const hexC = document.getElementById("hex-btn");
const text = document.getElementById("h2")

but.addEventListener("click" , function(){
   const randomNum = Math.floor(Math.random(colors) * 5);
    document.body.style.backgroundColor = colors[randomNum];
   console.log(randomNum)
})


hexC.addEventListener("click" , function(){
    
    let hex = '#';
    for(let i = 0; i<6;i++){
        hex += hexers[randomColor()];
    }
    
    document.body.style.backgroundColor = hex;
    text.textContent = "Hex Color : " + " " + hex;
})


function randomColor(){
    return  Math.floor(Math.random() * hexers.length);
}

