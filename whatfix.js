"use strict";
function init(){
      var a=document.querySelector.bind(document),
            b=document.querySelector(".vertical_nav"),
            c=document.querySelector(".wrapper"),
            d=document.getElementById("js-menu"),
            e=d.querySelectorAll(".menu--item__has_sub_menu");
            a(".toggle_menu").onclick=function(){
                b.classList.toggle("vertical_nav__opened"),
                    c.classList.toggle("toggle-content")
            };
        for(var f=0;f<e.length;f++)
            e[f].classList.contains("menu--item__has_sub_menu")&&e[f].querySelector(".menu--link").addEventListener("click",function(a){
                for(var b=0;b<e.length;b++)
                     a.target.offsetParent!=e[b]&&e[b].classList.remove("menu--subitens__opened");
                a.target.offsetParent.classList.toggle("menu--subitens__opened")
            },!1)
}

function clickDone(clickedId){
    var el = document.getElementById(clickedId);
    var text = (el.innerText || el.textContent);
    document.getElementById("result").innerHTML = text;
}

