const container=document.querySelector("#container");
container.style.visibility="hidden";
function input(){
   let size=parseInt(prompt("Enter Grid Size : "));
   if(!isNaN(size)){
      create_grid(size);
   }
   else{
      window.alert("Invalid Entry, Please Try Again");
      input();

   }
}
function create_grid(size){
   container.innerHTML="";
   for(let i=0;i<size;i++) //create no. of rows
   {
      const div=document.createElement("div");
      div.classList.add("col");
      container.appendChild(div);
   }
   const row=document.querySelectorAll(".col");
   row.forEach(box=>{
      for(i=0;i<size;i++){
         let newDiv=document.createElement("div");
         newDiv.classList.add("grid");
         box.appendChild(newDiv);
         newDiv.addEventListener('mouseover',()=>{
            newDiv.style.backgroundColor="black";
         });
      }
   })
   container.style.visibility="visible";
}
function changeGridSize(){
   location.reload();
}
function resetColor(){
   const decolor=document.querySelectorAll(".grid");
   decolor.forEach(declr=>{
      declr.style.backgroundColor="";
   })
}
function changeColor(){
   let color=prompt("Enter Colour : ")
   resetColor();
   const decolor=document.querySelectorAll(".grid");
   decolor.forEach(div=>{
      div.addEventListener('mouseover',()=>{
         div.style.backgroundColor=color;
      })
   })
}
function randomColor(){
   resetColor();
   const decolor=document.querySelectorAll(".grid");
   decolor.forEach(div=>{
      div.addEventListener('mouseover',()=>{
         div.style.backgroundColor=colors();
      })
   })   
}
function colors(){
   const red = Math.floor(Math.random() * 256); // Random number between 0 and 255
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   return `rgb(${red}, ${green}, ${blue})`;
}
input();