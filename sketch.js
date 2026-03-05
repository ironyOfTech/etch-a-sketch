const text = document.getElementById("insideText")
// const gridNumber = parseInt(prompt("Enter the grid value:"));
const form = document.querySelector("#myForm");
const div = document.querySelector(".container");  

form.addEventListener("submit" , function(event){
    event.preventDefault();
    let gridNumber = text.value ;
    if (gridNumber > 100) {
        alert("Maximum allowed value is 100");
        return;
    }
    div.innerHTML=" ";
    let N = gridNumber*gridNumber;

     let width = 100/gridNumber;
     for(let i =1;i<=N;i++)
     {
         const smallDiv = document.createElement("div");
         div.appendChild(smallDiv);
         smallDiv.classList.add("box");
         smallDiv.style.width = width + "%" ;
         
     smallDiv.addEventListener("mouseenter" ,() => {
        
        
        
         let R = Math.floor(Math.random()*256);
         let G =Math.floor(Math.random()*256);
         let B= Math.floor(Math.random()*256);
         smallDiv.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        
          
         
     })
     
     }
})
