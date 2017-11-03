function calender(container, load){
    document.getElementById(container).innerHTML= load;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown(){
 document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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

function hunt() {
    window.alert("this works");
}

