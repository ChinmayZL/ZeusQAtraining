function ValidateTextBox() {
    if (document.getElementById("username").value.trim() == ""){
        alert("All fields are compulsory");
        document.getElementById("username").focus();
        return false;
        }
    else{
        if (document.getElementById("comm").value.trim() == ""){
            alert("All fields are compulsory");
            document.getElementById("comm").focus();
            return false;
            }
        else{
            var getSelectedValue=document.querySelector('input[name="gender"]:checked');
            if(getSelectedValue == null) {   
                alert("All fields are compulsory");
                document.getElementById("selectone").focus();
                return false;
            }
            }   
        }
    }

