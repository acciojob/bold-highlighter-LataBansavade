let strong = document.getElementsByTagName("strong")

function highlight() {
    //Write your code here
    for (const element of strong) {
        element.style.color = "green";
      }
 
}

function return_normal() {
    //Write your code here

    for (const element of strong) {
        element.style.color = "black";
      }
}
