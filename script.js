var Temp = 0;
var value_temp = 0
window.addEventListener("wheel", function(value){
    Temp += Math.sign(value.deltaY);
});

window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop;
        if(scroll == 0){
            document.getElementById("Header").style.color = 'hsl(211, 0%, 100%)';
        }
        if(document.documentElement.scrollTop >= 1 && document.documentElement.scrollTop < 500){
            document.getElementById("Header").style.color = 'hsl(211, 100%, '+(100-(scroll/10))+'%)';
            document.getElementById("why").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("temp_why").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("like").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("temp_like").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("Invite").style.color = 'hsl(211, 100%, 50%)';
        }if(document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop < 1000){
            document.getElementById("why").style.color = 'hsl(211, '+(Number(Temp!=500)*100)+'%, '+(100-(((scroll/100)-5)*10))+'%)';
            document.getElementById("temp_why").style.color = 'hsl(211, '+(Number(Temp!=500)*100)+'%, '+(100-(((scroll/100)-5)*10))+'%)';
            document.getElementById("like").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("temp_like").style.color = 'hsl(211, 100%, 50%)';
            document.getElementById("Invite").style.color = 'hsl(211, 100%, 50%)';
        }if(document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop < 1582){
            document.getElementById("like").style.color = 'hsl(211, '+(Number(Temp!=11)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            document.getElementById("temp_like").style.color = 'hsl(211, '+(Number(Temp!=11)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            document.getElementById("Invite").style.color = 'hsl(211, 100%, 50%)';
        }if(document.documentElement.scrollTop == 1582){
            document.getElementById("Invite").style.color = 'hsl(211, '+(Number(Temp!=17)*100)+'%, '+(100-((Math.floor(scroll/100)-15)*10))+'%)';
        }
    console.log(scroll);
});
