var Temp = 0;
var value_temp = 0
window.addEventListener("wheel", function(value){
    Temp += Math.sign(value.deltaY);
});

window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop;
    let why, temp_why, like, temp_like, invite;
    why = document.getElementById("why");
    temp_why = document.getElementById("temp_why");
    like = document.getElementById("like");
    temp_like = document.getElementById("temp_like");
    invite = document.getElementById("Invite");
        if(scroll == 0){
            document.getElementById("Header").style.color = 'hsl(211, 0%, 100%)';
        }
        if(document.documentElement.scrollTop >= 1 && document.documentElement.scrollTop < 500){
            why.style.display = 'none';
            temp_why.style.display = 'none';
            document.getElementById("Header").style.color = 'hsl(211, 100%, '+(100-(scroll/10))+'%)';
            why.style.color = 'hsl(211, 100%, 50%)';
            temp_why.style.color = 'hsl(211, 100%, 50%)';
            like.style.color = 'hsl(211, 100%, 50%)';
            temp_like.style.color = 'hsl(211, 100%, 50%)';
            invite.style.color = 'hsl(211, 100%, 50%)';
        }if(document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop < 1000){
            why.style.display = '';
            temp_why.style.display = '';
            why.style.color = 'hsl(211, '+(Number(scroll!=500)*100)+'%, '+(100-(((scroll/100)-5)*10))+'%)';
            temp_why.style.color = 'hsl(211, '+(Number(scroll!=500)*100)+'%, '+(100-(((scroll/100)-5)*10))+'%)';
            like.style.color = 'hsl(211, 100%, 50%)';
            temp_like.style.color = 'hsl(211, 100%, 50%)';
            invite.style.color = 'hsl(211, 100%, 50%)';
            like.style.display = 'none';
            temp_like.style.display = 'none';
        }if(document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop < 1600){
            like.style.display = '';
            temp_like.style.display = '';
            like.style.color = 'hsl(211, '+(Number(scroll!=1100)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            temp_like.style.color = 'hsl(211, '+(Number(scroll!=1100)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            invite.style.color = 'hsl(211, 100%, 50%)';
        }if(document.documentElement.scrollTop >= 1648){
            invite.style.display = '';
            invite.style.color = 'hsl(211, '+(Number(scroll!=1676)*100)+'%, '+(100-((Math.floor(scroll/100)-16)*10))+'%)';
        }
    console.log(scroll);
});

console.log(why);
