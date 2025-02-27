const container=document.querySelector("#container");
container.style.visibility="hidden";
let size=parseInt(prompt("Enter Grid Size : "));
if(size>0)
create_grid(size);
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
         const newDiv=document.createElement("div");
         newDiv.classList.add("grid");
         box.appendChild(newDiv);
         newDiv.addEventListener('mouseover',()=>{
            newDiv.style.backgroundColor="black";
         });
      }
   })
   container.style.visibility="visible";
}
function refresh(){
   location.reload();
}
function resetColor(){
   const decolor=document.querySelectorAll(".grid");
   decolor.forEach(declr=>{
      declr.style.backgroundColor="";
   })
}