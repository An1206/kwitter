function addUser(){
    user_name = document.getElementById("User_name").Value;
 localStorage.setItem("user_name" , user_name);
 window.location ="kwitter_room.html";
 

}