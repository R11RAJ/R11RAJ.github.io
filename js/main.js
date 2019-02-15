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
