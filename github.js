var octicon=document.getElementById('octicon');
var flag=true;
octicon.onclick=function(){
  var classVal1 = document.getElementById("open1").getAttribute("class");
  var classVal2 = document.getElementById("open2").getAttribute("class");
  var classVal3 = document.getElementById("open3").getAttribute("class");
  if (flag) {
    classVal1 = classVal1 .concat(" open");
    document.getElementById("open1").setAttribute("class",classVal1 );
    classVal2 = classVal2 .concat(" open");
    document.getElementById("open2").setAttribute("class",classVal2 );
    classVal3 = classVal3 .concat(" open");
    document.getElementById("open3").setAttribute("class",classVal3 );
  }
  else {
    classVal1 = classVal1 .replace(" open","");
    document.getElementById("open1").setAttribute("class",classVal1 );
    classVal2 = classVal2 .replace(" open","");
    document.getElementById("open2").setAttribute("class",classVal2 );
    classVal3 = classVal3 .replace(" open","");
    document.getElementById("open3").setAttribute("class",classVal3 );
  }
  flag=!flag;
}
