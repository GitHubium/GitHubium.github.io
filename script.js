
var nameDivHeight = 0;

var isNameDivVisible = false;
var name;

var e = Object.create({});

function generateName() {
  isNameDivVisible = true;
  e.name_div.style.display = "block";
  e.name_canvas.style.width = windowWidth;
  name = e.name_input.value;
}

function update() {
  if (isNameDivVisible) {
    nameDivHeight += (500-nameDivHeight)*0.1;
    e.name_div.style.height = nameDivHeight+"px";
    e.name_canvas.style.height = nameDivHeight-150;
  }


}

function metaUpdate() {
  update();
  window.requestAnimationFrame(metaUpdate);
}

function pageLoaded() {
  // init stuff
  var elements = ["name_div", "name_input", "name_canvas"]
  for (var i = 0; i < elements.length; i ++) {
    var ele = elements[i];
    e[ele] = document.getElementById(ele);
  }


  window.requestAnimationFrame(metaUpdate);
}
