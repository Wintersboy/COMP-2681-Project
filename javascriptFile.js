function validateForm() {
    var a = document.forms["myForm"]["fName"].value;
    var b = document.forms["myForm"]["lName"].value;
    var c = document.forms["myForm"]["address"].value;
    var d = document.forms["myForm"]["email"].value;
    var e = document.forms["myForm"]["phone"].value;

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
      alert("Name must be filled out");
      return false;
    }
  } 

function setDate() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}  