let loadmorebtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadmorebtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length){
        loadmorebtn1.style.display = 'none'
    }
}

let loadmorebtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadmorebtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i = currentItem2; i < currentItem2 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length){
        loadmorebtn2.style.display = 'none'
    }
}

let loadmorebtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadmorebtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i = currentItem3; i < currentItem3 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length){
        loadmorebtn3.style.display = 'none'
    }
}

let loadmorebtn4 = document.querySelector('#load-more-4');
let currentItem4 = 4;

loadmorebtn4.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-4 .box-4'
    )];
    for(var i = currentItem4; i < currentItem4 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem4 += 4;
    if(currentItem4 >= boxes.length){
        loadmorebtn4.style.display = 'none'
    }
}