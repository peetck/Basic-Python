load("why_python");
function load(select){
    let title = document.getElementById("title");
    title.innerHTML = "Loading..   <div class=\"loading-animation\"></div>";
    let content = document.getElementById("content");
    content.innerHTML = "<div class=\"loading-animation\"></div>";
    document.title = "Loading...";
    let requestURL = 'json/' + select + '.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            show(JSON.parse(request.responseText));
        }
    };
    request.open("GET", requestURL, true);
    request.send();
    console.log(select);
}
function show(json) {
    let content = document.getElementById("content");
    let title_msg = json.title;
    let title = document.getElementById("title");
    title.innerHTML = "<b>" + title_msg + "</b>" + "&nbsp;&nbsp;&nbsp;" + "<img class='img-fluid' width='100' src='images/logo/" + json.logo + "'>";
    title.style.backgroundColor = json.color;
    content.innerHTML = "";
    let temp = "";
    for (let i = 0; i < json.content.length; i++) {
        temp += "<p>" + json.content[i] + "</p>";
    }
    content.innerHTML = temp;
    document.title = "Basic Python" + " : " + title_msg;
}