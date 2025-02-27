const container=document.querySelector("#container");
let size=document.getElementById("size");
const color=document.getElementById("color");
function create_grid(size){
   container.innerHTML="";
   for(let i=0;i<size;i++) //create no. of rows
   {
      const div=document.createElement("div");
      div.classList.add("col");
      container.appendChild(div);
      console.log(i);
   }
   const row=document.querySelectorAll(".col");
   row.forEach(box=>{
      for(i=0;i<size;i++){
         const newDiv=document.createElement("div");
         newDiv.classList.add("grid");
         box.appendChild(newDiv);
      }
   })

}
function generate(){
   let grid=size.value;
   console.log(grid);
   create_grid(grid);
}