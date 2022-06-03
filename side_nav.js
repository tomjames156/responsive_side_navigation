const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sidebar = document.querySelector(".side-nav");
const mainContent = document.querySelector(".main");

function showSideBar(){
    sidebar.style.width = "17%";
    mainContent.style.marginLeft = "19.5%";
    // sidebar.style.display = "block";
    // sidebar.classList.add("show");
    // sidebar.classList.remove("hide");
}

function closeSideBar(){
    sidebar.style.width = "0";
    // sidebar.style.display = "none";
    mainContent.style.marginLeft = "0"
    // sidebar.classList.add("hide");
    // sidebar.classList.remove("show");
    // setTimeout(remove, 499);
}

function remove(){
    sidebar.style.display = "none";
}