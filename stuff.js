/* I created this file to help load the links selected links
   to be displayed in desired content area and also to make
   drop down menu work on both smaller screens and bigger screens.
   created by: Tricia L. Roberts
   Year: 2017
   Code of Louisville Project
 */

function calender(container, load) {
    document.getElementById(container).innerHTML = load;
}

// When the button is clicked, the dropdown content toggle between hiding and showing
function big() {
    document.getElementById("bigDropDown").classList.toggle("show");
}

function small() {
    document.getElementById("smallDropDown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.second')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function morning(container, load) {
    document.getElementById(container).innerHTML= load;
}

function evening(container, load) {
    document.getElementById(container).innerHTML= load;
}

function orderList(container, load) {
    document.getElementById(container).innerHTML= load; 
}

function info(container, load) {
    document.getElementById(container).innerHTML= load;
}

// print the page
function printThis() {
    window.print();
}

// for buttons that is not implemented

function searchButton() {
    alert("This functionality not yet implemented");
}

function save(){
    alert("This functionality not yet implemented");
}

// for log in button
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}