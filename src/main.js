// It is always helpful to use comments in your code!
let tmp= 212;
hot = () => {

var w= document.getElementById('boiling-temp');
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



change = () => { }
var y= document.getElementById('water-temp');
var a= document.getElementById('boiling');
var b= document.getElementById('good-temp');
var c = document.getElementById('frozen');



  if (y.innerHTML < 32) {
    a.remove('hide')
    document.getElementById('freezing-temp').classList.add('frozen')


  }
  else if(y.innerHTML > 212){
      c.remove('hide')
  document.getElementById('boiling-temp').classList.add('boilng')
    }
    else {
      b.remove('hide')
          document.getElementById('water-temp').classList.add('good-temp')

    }
setTimeout(change, 3000);
console.log(change);
