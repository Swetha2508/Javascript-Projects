
var btn_text = document.getElementById("btn").innerHTML;
console.log(btn_text);
function change()
{
    

    if(btn_text=="Switch to Dark Mode")
    {
        var body =  document.querySelector("body").style.backgroundColor="black";
        document.getElementById("para1").style.backgroundColor="white";
        document.getElementById("para1").style.color="black";
        document.getElementById("btn").style.backgroundColor="#dcdcdc";
        document.getElementById("btn").style.color="black";
        document.getElementById("btn").innerHTML="Switch to Light Mode";
        btn_text="Switch to Light Mode";
    }
    else if("Switch to Light Mode")
    {
        var body =  document.querySelector("body").style.backgroundColor="white";
        document.getElementById("para1").style.backgroundColor="black";
        document.getElementById("para1").style.color="white";
        document.getElementById("btn").style.backgroundColor="rgb(47,79,79)";
        document.getElementById("btn").style.color="white";
        document.getElementById("btn").innerHTML="Switch to Dark Mode";
        btn_text="Switch to Dark Mode";
    }
}


/*function change1()
{

    if(btn_text=="Switch to Dark Mode")
    {
        var body =  document.querySelector("body").style.backgroundColor="black";
        document.getElementById("para1").style.backgroundColor="white";
        document.getElementById("para1").style.color="black";
        document.getElementById("btn").style.backgroundColor="#dcdcdc";
        document.getElementById("btn").style.color="black";
        document.getElementById("btn").innerHTML="Switch to Light Mode";
       
    }
    if(btn_text=="Switch to Light Mode")
    {
        var btn_text = document.getElementById("btn").innerHTML;
console.log(btn_text);
        var body =  document.querySelector("body").style.backgroundColor="white";
        document.getElementById("para1").style.backgroundColor="black";
        document.getElementById("para1").style.color="white";
        document.getElementById("btn").style.backgroundColor="rgb(47,79,79)";
        document.getElementById("btn").style.color="white";

    }

}*/
