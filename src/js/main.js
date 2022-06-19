document.body.addEventListener('click', e => {
    if(e.target.classList.contains('item-button')){
        e.preventDefault();
        let parent = e.target.parentNode.parentNode;
        let description = parent.querySelector('.hiden');
        if (description.classList.contains('visible')){
            description.classList.remove('visible')
            e.target.classList.remove('active')
        } else {
            description.classList.add('visible');
            e.target.classList.add('active')
        }
    }
    if(e.target.classList.contains('menu')){
        e.preventDefault();
        let header = document.querySelector('header');
        let overlay = header.querySelector('.overlay');
        if (overlay.classList.contains('off')) {
            overlay.classList.remove('off');
        } else {
            overlay.classList.add('off');
        };
    }
})