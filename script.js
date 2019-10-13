load("installation");
function load(select){
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
    title.innerHTML = title_msg + "&nbsp;&nbsp;&nbsp;" + "<img class='img-fluid' width='100' src='images/" + json.logo + "'>";
    title.style.backgroundColor = json.color;
    content.innerHTML = "";
    let temp = "";
    for (let i = 0; i < json.content.length; i++) {
        temp += json.content[i];
    }
    content.innerHTML = temp;
}