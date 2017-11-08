/* I created this file to help load the links selected links
   to be displayed in desired content area.
   created by: Tricia L. Roberts
   Year: 2017
   Code of Louisville Project
 */

// To load html file into content area
function calender(container, load) {
    document.getElementById(container).innerHTML = load;
}

function orderList(container, load) {
    document.getElementById(container).innerHTML= load; 
}

// print the page
function printThis() {
    window.print();
}

// for the buttons that is not implemented
function notReady() {
    alert("This functionality not yet implemented");
}

// to make iframe scrollable in safari/ipads
//if ("ontouchstart" in document.documentElement){
//$('html').addClass('touch');
//}