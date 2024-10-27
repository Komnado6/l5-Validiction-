function validate(){
    var x=document.getElementById("fname").value
    var y=document.getElementById("fage").value
    if(x== ""){
        alert("Name must be filled out")
        return false;
    }
    if(x.length <5){
        alert("Name must be more than 5")
    }
    if(y <10){
        alert("Person must be 18 and above")
    }
}