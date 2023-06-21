function liveSearch() {
  var input = document.getElementById("searchid");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("list-group-searchid");
  var li = ul.getElementsByTagName("li");

  var results = [];

  for (var i = 0; i < li.length; i++) {
    var a = li[i].querySelector("a");
    var txtValue = a ? a.textContent || a.innerText : "";
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      results.push(li[i]);
    } else {
      li[i].style.display = "none";
    }
  }

  if (results.length > 0 && filter.trim() !== "") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
}

window.addEventListener("load", function () {
  var input = document.getElementById("searchid");
  input.addEventListener("keyup", liveSearch);
  input.addEventListener("click", liveSearch);
});
