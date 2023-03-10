let btnLeft = document.getElementById('btn-left');
let btnRight = document.getElementById('btn-right');
let imgSlide = document.querySelectorAll('.img-item');

let startImg = 0;
let endImg = (imgSlide.length - 1) * 100;

btnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startImg < 0) {
        startImg = startImg + 100;
    }
    imgSlide.forEach(element => {
        element.style.transform = `translateX(${startImg}%)`
    });
}

btnRight.addEventListener('click',handleRightBtn)

function handleRightBtn() {
    if (startImg >= -endImg + 100) {
        startImg = startImg - 100;
    }
    imgSlide.forEach(element => {
        element.style.transform = `translateX(${startImg}%)`
    });

}

// .........automatic slide image........

function renderSlideAuto() {
    if (startImg >= -endImg + 100) {
           handleRightBtn()
    }
    else{
        startImg =0;
    }
}
setInterval(renderSlideAuto, 2000);


// .............sidebar-navigation..............

const sidebarNavigation = document.getElementById('sidebar-navigationbar');
const sidebarLi = document.getElementById('sidebar');
const sideClosebtn = document.getElementById('close-btn-svg');

sidebarLi.addEventListener('click', () => {
    sidebarNavigation.classList.toggle('sidebar-show');
});

sideClosebtn.addEventListener('click', () => {
    sidebarNavigation.classList.toggle('sidebar-show');
})



// deal btn

let dealLeftbtn = document.getElementById('deal-btn-left');
let dealRightbtn = document.getElementById('deal-btn-right');
let dealItem = document.querySelectorAll('.deal-list');


let dealProduct = 0;

dealLeftbtn.addEventListener('click', () => {

    if (dealProduct < 0) {
        dealProduct += 500
    }

    if (dealProduct > -2000) {
        dealItem.forEach(el => {
            el.style.transform = `translateX(${dealProduct}%)`
        })
    }
})

dealRightbtn.addEventListener('click', () => {

    if (dealProduct > -1000) {
        dealProduct -= 500
    }
    dealItem.forEach(el => {
        el.style.transform = `translateX(${dealProduct}%)`
    })

})

let deal1Leftbtn = document.getElementById('deal-btn1-left');
let deal2Rightbtn = document.getElementById('deal-btn2-right')
let dealItem1 = document.querySelectorAll('.deal-list1');

let deal1Img = 0;

deal1Leftbtn.addEventListener('click',()=>{
     if (deal1Img < 0) {
        deal1Img +=500
     }
     if (deal1Img > -1500) {
        dealItem1.forEach(el => {
            el.style.transform = `translateX(${deal1Img}%)`
        })
    }
})

deal2Rightbtn.addEventListener('click',()=>{
    if (deal1Img > -1500) {
        deal1Img -=500
    }
    dealItem1.forEach(el=>{
        el.style.transform = `translateX(${deal1Img}%)`
    })
})