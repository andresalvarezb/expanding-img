const imgContainer = document.querySelectorAll('.container-img');


const imgs = [...imgContainer]
console.log(imgs);
imgs.forEach(img => {
    img.addEventListener('click', (e) => {
        addClass()
        img.classList.remove('contract')
        img.children[1].classList.add('visibility')
    })
})

function addClass() {
    imgs.forEach(img => {
        img.classList.add('contract')
        img.children[1].classList.remove('visibility')
    })
}