function press1(){
    var input = document.getElementById("email")
    var lab = document.getElementById("lab1")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "8px"
    }
}

function depress1(){
    var input = document.getElementById("email")
    var lab = document.getElementById("lab1")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}
