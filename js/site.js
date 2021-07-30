// toggle config options
function toggleConfig(){
    if (document.getElementById("configMenu").classList.contains("invisible")){
        document.getElementById("configMenu").classList.remove("invisible");
    } else {
        document.getElementById("configMenu").classList.add("invisible");
    }
}
// toggle melee pricing options
function toggleMeleePricing(){
    alert("You clicked to show melee pricing!");
}
// toggle melee pricing options
function toggleCustomerGold(){
    alert("You clicked to show customer gold pricing!");
}

// reset the form
function resetForm(){
    document.getElementById("alert").classList.add("invisible");
}

function getValues(){
    document.getElementById("alert").classList.remove("invisible");
}

