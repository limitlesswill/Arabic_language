window.onload = () => {
    const screen = document.getElementById("screen");
    const keyboard = document.getElementById("keyboard");
    const tooltip = document.getElementById("tooltip");

keyboard.addEventListener("input",convert,this);
screen.addEventListener("click",copy);

function copy(){
    screen.select();
    document.execCommand("copy");
    keyboard.focus();
    tooltip.style.opacity = "0.8";
    tooltip.style.visibility = "visible";
    
    setTimeout(
    ()=>{
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
    }
    ,900);
}

function convert(e){

let str = keyboard.value.replaceAll("ج","ح");
str = str.replaceAll("خ","ح");
str = str.replaceAll("غ","ع");
str = str.replaceAll("ف","ڡ");
str = str.replaceAll("ق","ٯ");
str = str.replaceAll("ث","ٮ");
str = str.replaceAll("ض","ص");
str = str.replaceAll("ك","ک");
str = str.replaceAll("ن","ں");
str = str.replaceAll("ت","ٮ");
str = str.replaceAll("أ","ا");
str = str.replaceAll("إ","ا");
str = str.replaceAll("ٱ","ا");
str = str.replaceAll("آ","ا");
str = str.replaceAll("لإ","لا");
str = str.replaceAll("لأ","لا");
str = str.replaceAll("لآ","لا");
str = str.replaceAll("ب","ٮ");
str = str.replaceAll("ي","ى");
str = str.replaceAll("ش","س");
str = str.replaceAll("ظ","ط");
str = str.replaceAll("ز","ر");
str = str.replaceAll("ة","ه");
str = str.replaceAll("ؤ","و");
str = str.replaceAll("ء","");
str = str.replaceAll("ذ","د");

    
screen.textContent = str;

}

};

