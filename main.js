// It is always helpful to use comments in your code!
let tmp= 212;
hot = () => {

var w= document.getElementById('boiling');
var textnode1 = document.createTextNode(tmp);
w.appendChild(textnode1)
}
window.addEventListener("load", hot)

let tmp2= 32;
freeze = () => {

var x= document.getElementById('freezing-temp');
var textnode2 = document.createTextNode(tmp2);
x.appendChild(textnode2)
}
window.addEventListener("load", freeze)

let tmp3= 29;
myTemp = () => {

var y= document.getElementById('water-temp');
var textnode3 = document.createTextNode(tmp3);
y.appendChild(textnode3)
}
window.addEventListener("load", myTemp)

change = function() {
var w= document.getElementById('boiling');

var y= document.getElementById('water-temp');
  if (tmp3 > 212) {
    y.classList.remove('hide');
  } else {
    setTimeout(function() {
      w.classList.add('show');
    }, 3000);
  }
}
window.addEventListener("load", change)
