function clr(){
    document.getElementById("input").value = "";
}
function dis(inp){
    let x = document.getElementById("input").value;
        document.getElementById("input").value +=inp;
}
function solve() 
{ 
    let x = document.getElementById("input").value;
    let y = ""
    try{
         y = eval(x);
        }
    catch(e){
        y = "Wrong Input";
    }
    
    if(y === "NaN"){
        y = "Infinity";
    }
    if(y === "infinity"){
        y = "NaN";
    }
    document.getElementById("input").value = y; 
}