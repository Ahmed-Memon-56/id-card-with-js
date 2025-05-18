let user_name=  document.getElementById("name")
let user_fname= document.getElementById("fname")
let user_number= document.getElementById("number")
let user_address= document.getElementById("address")
let user_city= document.getElementById("city")
 function generatecard() {
     let rollno= Math.random() *1000;
    rollno=Math.round(rollno);


    let name = user_name.value.charAt(0).toUpperCase() + user_name.value.slice(1)|| "unknown";
    let fname= user_fname.value.charAt(0).toUpperCase() + user_fname.value.slice(1)|| "unknown";
    let number= user_number.value || "unknown";
    let address= user_address.value.charAt(0).toUpperCase() + user_address.value.slice(1) || "unknown";
    let city= user_city.value.charAt(0).toUpperCase() + user_city.value.slice(1) ||"unknown" ;
   
   document.body.innerHTML += `
<div class="id-card">
  
<div>
        <div class="id-detail">
    
            <h2 >ID Card</h2>
            <p><strong>Roll No:</strong> ${rollno}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Father's Name:</strong> ${fname}</p>
            <p><strong>Phone Number:</strong> ${number}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
        </div>
    `;
 }
