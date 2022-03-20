function press1(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("lab1")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "8px"
    }
}

function depress1(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("lab1")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}

function press2(){
    var input = document.getElementById("sobrenome")
    var lab = document.getElementById("lab2")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "8px"
    }
}

function depress2(){
    var input = document.getElementById("sobrenome")
    var lab = document.getElementById("lab2")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}

function press3(){
    var input = document.getElementById("email")
    var lab = document.getElementById("lab3")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "8px"
    }
}

function depress3(){
    var input = document.getElementById("email")
    var lab = document.getElementById("lab3")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}

function press4(){
    var input = document.getElementById("password")
    var lab = document.getElementById("lab4")
    var span1 = document.getElementById("span1")
    var span2 = document.getElementById("span2")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "8px"
    }

    if(input.type == "password"){
        span1.style.display = "block"
        span2.style.display = "none"
    }

    if(input.type == "text"){
        span1.style.display = "none"
        span2.style.display = "block" 
    }
}

function depress4(){
    var input = document.getElementById("password")
    var lab = document.getElementById("lab4")
    var span1 = document.getElementById("span1")
    var span2 = document.getElementById("span2")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
        span1.style.display = "none"
        span2.style.display = "none"
    }
}

function mostrar(){
    var input = document.getElementById("password")
    var span1 = document.getElementById("span1")
    var span2 = document.getElementById("span2")

    if(input.type == "password"){
        input.type = "text"
        span1.style.display = "none"
        span2.style.display = "block"
    }
}

function ocultar(){
    var input = document.getElementById("password")
    var span1 = document.getElementById("span1")
    var span2 = document.getElementById("span2") 

    if(input.type == "text"){
        input.type = "password"
        span1.style.display = "block"
        span2.style.display = "none"
    }
}
