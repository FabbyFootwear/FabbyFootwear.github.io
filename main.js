let navItems = document.getElementById ("myNavItems").getElementsByTagName ("li")
let boxOne = document.getElementsByClassName ("item1")

for (i=0; i < navItems.length; i++) {
  navItems[i].addEventListener ("mouseover", testItem);
}

//function testItem () {
//  alert ("Javascript has detected a mouseover");

//}

//if (navItems[0] = mouseover) {
//  alert ("Javascript has detected a mouseover on SteveFrizz");
//  else {
//    testItem ();
//  }
// }
