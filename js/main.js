document.getElementById('A').onclick = function() {
  document.getElementById("about").style.display = "";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "none";
 };
 document.getElementById('B').onclick = function() {
   document.getElementById("about").style.display = "none";
   document.getElementById("projects").style.display = "";
   document.getElementById("skills").style.display = "none";
   document.getElementById("contact").style.display = "none";
};
document.getElementById('C').onclick = function() {
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("skills").style.display = "";
    document.getElementById("contact").style.display = "none";
};
document.getElementById('D').onclick = function() {
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact").style.display = "";
};
