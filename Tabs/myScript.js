function openCity(event, cityId) {
    let i, tabLinks, tabContent;

    tabLinks = document.getElementsByClassName("tabLinks");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', "");
    }

    tabContent = document.getElementsByClassName("tabContent");
    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(cityId).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();