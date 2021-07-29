// variables by id:
// meleeProngSetting


function toggleConfig(){
    if (document.getElementById("configMenu").classList.contains("invisible")){
        document.getElementById("configMenu").classList.remove("invisible");
    } else {
        document.getElementById("configMenu").classList.add("invisible");
    }
}