const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main");
// const links = document.getElementsByTagName("a");

function showSideBar(){
    sidebar.style.height = "100%";    
}

function closeSideBar(){
    sidebar.style.height = "0%";
}