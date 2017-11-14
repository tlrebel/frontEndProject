/* I created this file to help load the links selected links
   to be displayed in desired content area, to print the page, and to alert user to buttons not ready.
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
    window.alert("This functionality not yet implemented");
}

