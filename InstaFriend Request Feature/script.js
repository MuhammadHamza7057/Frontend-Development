var istatus = document.querySelector("h5")
var add = document.querySelector("#add");
var check = 0;
add.addEventListener("click", function(){
  if(check == 0){
      istatus.innerHTML = "Friend Request......."
    istatus.style.color = "green"
    add.style.backgroundColor = "black"
    add.innerHTML = "Remove Request"
    check = 1;
  }
  else{
    istatus.innerHTML = "Friend"
    istatus.style.color = "black"
    add.innerHTML = "Friend Request"
    check = 0;
  }
  
})
let d = prompt("Please enter your request");
console.log(d);



console.log('live')
