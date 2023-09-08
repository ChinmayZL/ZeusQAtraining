
function showPassword() {
    var x = document.getElementById("exampleInputPassword1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function logintodashboard(){
  var getSelectedValue=document.querySelector('input[name="exampleRadios"]:checked')
  if (getSelectedValue == null){
    alert("All fields are compulsory");
  }
  else if(document.querySelector('exampleFormControlSelect1')==""){
    alert("All fields are compulsory");
  }
  else if(document.querySelector('exampleFormControlSelect1')==""){
    alert("All fields are compulsory");
  }
  else if (document.getElementById("exampleInputEmail1").value.trim() == ""){
    alert("All fields are compulsory");
  }
  else if (document.getElementById("exampleInputPassword1").value.trim() == ""){
    alert("All fields are compulsory");
  }
  else{
    window.location.href = "dashboard.html";
  }
}

