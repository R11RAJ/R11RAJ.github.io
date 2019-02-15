/*var ul = document.getElementById('buttons');
if(ul){
  console.log(1);
}
ul.addEventListener('onclick', function(e) {
    if (e.target.tagName === 'LI'){
      if (e.target.id=='A'){
        console.log(1111);
        document.getElementById("about").style.display = "";
        document.getElementById("projects").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      }
      if (e.target.id=='B'){
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").style.display = "";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "none";
      }
      if (e.target.id=='C'){
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("skills").style.display = "";
        document.getElementById("contact").style.display = "none";
      }
      if (e.target.id=='D'){
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("skills").style.display = "none";
        document.getElementById("contact").style.display = "";
      }
    }
});*/
var v;
function change(v){
    if (v==1){
      
      document.getElementById("about").style.display = "";
      document.getElementById("projects").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("contact").style.display = "none";
    }
    if (v==2){

      document.getElementById("about").style.display = "none";
      document.getElementById("projects").style.display = "";
      document.getElementById("skills").style.display = "none";
      document.getElementById("contact").style.display = "none";
    }
    if (v==3){
      document.getElementById("about").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("skills").style.display = "";
      document.getElementById("contact").style.display = "none";
    }
    if (v==4){
      document.getElementById("about").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("contact").style.display = "";
    }
}
