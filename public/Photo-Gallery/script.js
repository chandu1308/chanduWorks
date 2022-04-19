const uploadPic = document.querySelector('.upload');
const container1 = document.querySelector('.container1');

uploadPic.addEventListener('change', function(e){

    let x = e.target.files[0];

    let source = window.URL.createObjectURL(x);
        
    const html = `<div class="pic"><img src="${source}" class="size"></div>`
        
    container1.insertAdjacentHTML('afterbegin', html);

});