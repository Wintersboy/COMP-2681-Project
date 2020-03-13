function validateForm() {
    var x = document.forms["myForm"]["fName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 

function setDate() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}  