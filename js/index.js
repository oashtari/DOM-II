// Your code goes here
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', () => {
    event.target.style.backgroundColor = 'blue';
    event.target.style.border = '3px solid orange';
})

const introParagraph = document.querySelector('.intro p');

introParagraph.addEventListener('mouseenter', () => {
    event.target.style.color = 'white';
})

introParagraph.addEventListener('mouseleave', () => {
    event.target.style.border = '5px dotted green';
})

const introHeader = document.querySelector('.intro img');

introHeader.addEventListener('wheel', () => {
    event.target.style.width = '50%';
    event.target.style.height = '200px';
});

const firstContent = document.querySelector('.content-section');


firstContent.addEventListener('dblclick', () => {
    event.target.style.display = "none";
});

const funPlace = document.querySelector('.content-destination img');

funPlace.addEventListener('mouseover', () => {
    funPlace.src = 'https://files.brightside.me/files/news/part_14/140405/1332905-Queimada-Grande02-1000-2de279b24a-1484648003.jpg';
})


const button = document.querySelectorAll('.btn');

function hideous() {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'orange';
}

button.forEach(item => {
    item.addEventListener('mouseout', hideous);
});