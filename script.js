let current_page = "blank";
load("why_python");

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

function load(select){
    if (select == current_page){
        return;
    }
    else{
        current_page = select;
        console.log("Change to " + current_page);
    }
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

function click_sound() {
    var snd = new Audio("sound/click.mp3");
    snd.play();
}
