function validate_password()
{
    input = document.getElementById("password").value;
    var pwd=/(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.[0-9]).{5,50}/;
    
    if(input=="")
    {
       document.getElementById("invalid").innerHTML="!Please enter password";
    }
    else if (!(input==""))
    {
        if(pwd.test(input))
        {
           document.getElementById("valid").innerHTML="Congrtulations!password is valid";
           document.getElementById("invalid").innerHTML="";

        }
        else 
        {
            document.getElementById("invalid").innerHTML="!Password length must be (8-50) and must contains one uppercase letter,one lowercase letter,one digit and one symbol";
            document.getElementById("valid").innerHTML="";
        }
    }
    



    
}


