"use strict"

let cityNavExc = document.querySelector("#nav-btns");
let startDate = document.querySelector("#startDate");
let finishDate = document.querySelector("#finishDate");
let now = new Date();

var month = now.getUTCMonth() + 1; //months from 1-12
var day = now.getUTCDate();
var year = now.getUTCFullYear();

let newdate = year + "-" + month + "-" + day;

let excSmolensk = [
    {
        header : "Все",
        exc: ["Необычные маршруты", "Обычные маршруты"]
    },
    {
        header : "Необычные маршруты",
        exc : [
            {
                name: "Мистический Cмоленск",
                discription: "Таинственные страницы",
                price: "20$",
                pict: ""
            },
            {
                name: "Обычный Cмоленск",
                discription:
                    "Простые страницы",
                price:
                    "40$",
                pict: ""
            }
            ,
        ]
    }
    ,
    {
        header : "Обычные маршруты",
        exc: [
            {
                name: "Шоппинг",
                discription: "Таинственные магазины",
                price: "20$",
                pict: ""
            },
            {
                name: "Обычный Cмоленск",
                discription:
                    "Простые страницы",
                price:
                    "40$",
                pict: ""
            }
            ,
            {
                name: "Офигенский Cмоленск",
                discription:
                    "Простые страницы",
                price:
                    "40$",
                pict: ""
            }
        ]
    }
]

cityNavExc.setAttribute('class', 'bckgr-btn');
excSmolensk.forEach(renderNavBtns)
function renderNavBtns(elem) {
    let cityNavExcLi = document.createElement("li");
    cityNavExc.appendChild(cityNavExcLi);
    let cityNavExcLiA = document.createElement("a");
    cityNavExcLi.appendChild(cityNavExcLiA);
    cityNavExcLiA.setAttribute("href", "#");
    cityNavExcLiA.setAttribute("class", "ref");
    cityNavExcLiA.innerHTML = elem.header;
    let span = document.createElement("span");
    span.innerHTML = elem.exc.length;
    cityNavExcLiA.appendChild(span);
    span.setAttribute("class", "circle")
}

startDate.setAttribute("min", newdate);
finishDate.setAttribute("min", newdate);