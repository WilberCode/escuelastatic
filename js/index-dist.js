"use strict";var d=document,Id=d.getElementById.bind(document),qS=d.querySelector.bind(document),qSA=d.querySelector.bind(document),space="60px",spaceDefault="100px",navbar=Id("header-content"),rootStyles=d.documentElement.style,sticky=navbar.offsetTop,navFirst=Id("nav-first"),navSecond=Id("nav-second"),infoWrap=Id("info-wrap"),frontSearch=Id("front-search"),LogoImg=Id("logo__img"),bigMenu=d.querySelectorAll("#big-menu li ul"),main=Id("main"),navAll=Id("nav-all"),btnToggle=Id("toggle");btnToggle.addEventListener("click",function(){navAll.classList.toggle("nav-all-active"),btnToggle.classList.toggle("toggle-close-left"),btnToggle.classList.toggle("toggle-close")}),M.AutoInit(),d.addEventListener("DOMContentLoaded",function(){var e=d.querySelectorAll(".collapsible");M.Collapsible.init(e,options)});