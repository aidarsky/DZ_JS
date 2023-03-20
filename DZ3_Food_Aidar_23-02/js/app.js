///////////////////////////////////////// авто слайдер итервал 1сек
const tabParent = document.querySelector(".tabheader__items");
const tabItems = document.querySelectorAll(".tabheader__item");
const tabContent = document.querySelectorAll(".tabcontent");

const hideContent = () => {
    tabContent.forEach((i) => {
        i.style.display = "none";
    });
    tabItems.forEach((j) => {
        j.classList.remove("tabheader__item_active");
    });
};

hideContent();

const showContent = (n = 0) => {
    tabContent[n].style.display = "block";
    tabItems[n].classList.add("tabheader__item_active");
};

showContent();

let c = 0;
const slider = () => {
    setInterval(() => {
        if (c === 4) c = 0;
        hideContent();
        showContent(c);
        c++;
    }, 1500);
};

slider();

//////////////////человек взаимодействует со слайдером на 5сек

tabParent.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("tabheader__item_active")) {
        tabItems.forEach((item, index) => {
            if (item === target) {
                hideContent();
                showContent(index);
            }
        });
        if (condition) {
        }
    }
});

//////////////////////////////// modal 1

// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#open_modal')
// const closeModalBtn = document.querySelector('#close_modal')
//
// const openModal = () => {
//     modal.classList.add('show')
//     modal.classList.remove('hide')
//     document.body.style.overflow = 'hidden'
// }
//
// const closeModal = () => {
//     modal.classList.add('hide')
//     modal.classList.remove('show')
//     document.body.style.overflow = ''
// }
//
// modalTrigger.onclick = () => openModal()
// closeModalBtn.onclick = () => closeModal()
//
// modal.onclick = event => event.target === modal ? closeModal() : false
// modal.onkeydown = event => event.code === 'Escape' ? closeModal() : false
// modal.onkeydown = event => event.code === 'Backspace'

////////////////////////////////////////modal 2

const modal = document.querySelector(".modal");
const open = document.querySelector("#open_modal");
const close = document.querySelector("#close_modal");
const btnTwo = document.querySelector("#btn_two");
const body = document.querySelector("body");

open.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
});

btnTwo.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible";
});

////////////////////////////////////////////scroll

window.addEventListener("scroll", () => {
    const bbb = document.getElementById("newCordinates");
    bbb.innerHTML = pageYOffset;
    if (bbb.innerHTML > 4400) {
        modal.style.display = "block";
    }
});