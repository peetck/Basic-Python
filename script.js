var Temp = 0;
window.addEventListener("wheel", function(x){
    Temp += Math.sign(x.deltaY);
    if(Temp <= 0){
        Temp = 0; 
        document.getElementById("Header").style.color = 'hsl(211, 0%, 100%)';
    }
    if(Temp >= 1 && Temp < 6){
        document.getElementById("Header").style.color = 'hsl(211, 100%, '+(100-(Temp*10)+'%)');
        document.getElementById("why").style.color = 'hsl(211, 100%, 50%)';
        document.getElementById("temp").style.color = 'hsl(211, 100%, 50%)';
    }if(Temp >= 6){
        document.getElementById("why").style.color = 'hsl(211, 0%, 100%)';
        document.getElementById("temp").style.color = 'hsl(211, 0%, 100%)';
    }
    console.log(Temp);
});