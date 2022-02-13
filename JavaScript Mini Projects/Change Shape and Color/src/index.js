// import "./styles.css";
"use strict"

var cnt1 = 0;
var color_change = document.getElementById('button1');
var bcolor = document.getElementById('app');
color_change.addEventListener('click', function(){
  if(cnt1%3 === 0)
  {
    bcolor.style.backgroundColor = "yellow";
    cnt1++;
  }
  else if(cnt1%3 === 1)
  {
    bcolor.style.backgroundColor = "purple";
    cnt1++;
  }
  else
  {
    bcolor.style.backgroundColor = "red";
    cnt1++;
  }
});


var cnt2 = 0;
var shape_change = document.getElementById('button2');
var shape = document.getElementById('inner');

shape_change.addEventListener('click', function(){
  if(cnt2%3 === 0)
  {
    shape.setAttribute("id", "triangle");
    cnt2++;
  }
  else if(cnt2%3 === 1)
  {
    shape.setAttribute("id", "circle");
    cnt2++;
  }
  else
  {
    shape.setAttribute("id", "inner");
    cnt2++;
  }
});