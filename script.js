function insert(value){ 
    var text = document.getElementById("screen").value;
    document.getElementById("screen").value = text + value;
    
}

function cleanScreen(){
    document.getElementById("screen").value = "";
}

function backSpace(){
    var value = document.getElementById("screen").value
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}
function equal(){
    var stringToMath = document.getElementById("screen").value;
    var solution = eval(stringToMath);
    document.getElementById("screen").value = solution;
}

function square(){
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.pow(value, 2);
}