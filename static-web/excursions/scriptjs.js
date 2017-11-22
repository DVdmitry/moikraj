"use strict"

let refNames = ["Что делать в городе", "Популярные", "Бюджетные", "Гиды", "Поиск", "Отзывы"];
let refContent = ["Отдыхаем", "Башня", "Шопинг", "Супер гиды", "Все найдем", "Все обсудим"]
let refs = document.querySelector(".refs");
let contents = document.querySelector(".contents");
let refContainer = [];
let contentContainer = [];
refNames.forEach(renderRefs);

function renderRefs(arrayElem) {
    let ref = document.createElement("div");
    ref.setAttribute("class", "ref");
    ref.innerHTML = arrayElem;
    refs.appendChild(ref);
    refContainer.push(ref);
}

refContent.forEach(renderContent);
function renderContent(arrayElem) {
    let content = document.createElement("div");
    content.setAttribute("class", "invisible");
    content.innerHTML = arrayElem;
    contents.appendChild(content);
    contentContainer.push(content);
}

refContainer.forEach(changeTab);
function changeTab (tab, index) {


    tab.addEventListener('click', function () {
        for (let i = 0; i< refContainer.length; i++) {
            if ($(refContainer[i]).hasClass("bckgr-tab")) {
                refContainer[i].className = refContainer[i].className.replace("bckgr-tab", "");
            }
        }
        tab.classList.add("bckgr-tab");
        contentContainer.forEach(makeInvisible);
        function makeInvisible(elem) {
            if (elem.className === "visible-content") {
                elem.className = elem.className.replace("visible-content", "invisible");
            }
        }
        contentContainer[index].className = contentContainer[index].className.replace("invisible", "visible-content");
    })
}