let clickImage = document.getElementById('image');
let mymodal = document.getElementById('myModal');
let modalContent = document.querySelector('.modal-content');
let caption = document.getElementById('caption')
let close = document.querySelector('.close')
console.log(close)

clickImage.addEventListener('click', function(){
    mymodal.style.display = "block"
    modalContent.src = this.src
    caption.innerHTML = this.alt
})

close.addEventListener('click', function(){
    mymodal.style.display = "none"
})