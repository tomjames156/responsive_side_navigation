const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main");

function showSideBar(){
    mainContent.style.opacity = "40%";
    sidebar.style.width = "17vw";
    mainContent.style.marginLeft = "17vw";
}

function closeSideBar(){
    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";    
    mainContent.style.opacity = "unset";
}