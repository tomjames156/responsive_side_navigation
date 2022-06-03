const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main");

function showSideBar(){
    sidebar.style.width = "17vw";
}

function closeSideBar(){
    sidebar.style.width = 0;   
}