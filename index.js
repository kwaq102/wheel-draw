const btn = document.querySelector('.btn-draw');
const circle = document.querySelector('.circle');


btn.addEventListener('click', () => {
    let randomTime = (Math.random() * (4-1) + 1).toFixed(2);
    let randomRotate = Math.floor((Math.random() * (1800 - 360) + 360));
    
    circle.style.transition = `transform ${randomTime}s ease-out`
    circle.style.transform = `rotate(${randomRotate}deg)`

    console.log(circle.style.transition);

})