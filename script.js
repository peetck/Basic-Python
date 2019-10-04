var Temp = 0;
var value_temp = 0;
var pass = true;
var condition = false;


window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop;
    let why, temp_why, like, temp_like, invite;
    let div, button_div;
    why = document.getElementById("why");
    temp_why = document.getElementById("temp_why");
    like = document.getElementById("like");
    temp_like = document.getElementById("temp_like");
    invite = document.getElementById("Invite");
    div = document.getElementById("createbutton");
    button_div = document.createElement("button");
    button_div.setAttribute("class", "btn btn-outline-dark btn-lg btn-block");
    button_div.setAttribute("href", "introduction.html");
    button_div.innerHTML = "Enroll";
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
            if(pass == false && condition == true){
                div.style.visibility = 'hidden';
            }
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
            if(pass == false && condition == true){
                div.style.visibility = 'hidden';
            }
        }if(document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop < 1600){
            like.style.display = '';
            temp_like.style.display = '';
            like.style.color = 'hsl(211, '+(Number(scroll!=1100)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            temp_like.style.color = 'hsl(211, '+(Number(scroll!=1100)*100)+'%, '+(100-(((scroll/100)-11)*10))+'%)';
            invite.style.color = 'hsl(211, 100%, 50%)';
            if(pass == false && condition == true){
                div.style.visibility = 'hidden';
            }
        }if(document.documentElement.scrollTop >= 1648){
            invite.style.display = '';
            invite.style.color = 'hsl(211, '+(Number(scroll!=1676)*100)+'%, '+(100-((Math.floor(scroll/100)-16)*10))+'%)';
            condition = true;
            if(document.documentElement.scrollTop >= 1648 && pass == true){
                div.appendChild(button_div);
                pass = false;
            }else if(document.documentElement.scrollTop >= 1648 && pass == false && condition == true){
                div.style.visibility = '';
            }
        }
    console.log(scroll, pass, condition);
});
