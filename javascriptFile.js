function validateForm() {
    var x = document.forms["myForm"]["fName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 