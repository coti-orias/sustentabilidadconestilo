function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

filterSelection("all")
function filterSelection(filter) {
    var marcas, i;
    marcas = document.getElementsByClassName("filterDiv");
    if (filter == "all") {
        filter = "";
    } 
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < marcas.length; i++) {
        RemoveClass(marcas[i], "show");
        if (marcas[i].className.indexOf(filter) > -1) AddClass(marcas[i], "show");
    }
    if(document.getElementsByClassName("show").length === 0){
        document.getElementById("noResults").classList.add("noresults");
    }else{
        document.getElementById("noResults").classList.remove("noresults");
    }
}

// Show filtered elements
function AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
    }
}
}

// Hide elements that are not selected
function RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
console.log(btnContainer)
var btns = btnContainer.getElementsByClassName("category-btn");
console.log(btns)
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(event) {
var current = document.getElementsByClassName("active-category");
console.log(current)
if(current.length > 0){
    current[0].className = current[0].className.replace(" active-category", "");
}
this.className += " active-category";
});
}