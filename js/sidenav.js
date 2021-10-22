function openNav() {
  document.getElementById("mySidenav").style.width = "50vw";
  document.getElementById("theSite").style.marginRight = "50vw";
  document.getElementById("maincontent").style.opacity = "0.3";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("theSite").style.marginRight= "0";
  document.getElementById("maincontent").style.opacity= "inherit";
  document.body.style.overflow = "inherit";
}
