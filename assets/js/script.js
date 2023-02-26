const tabHeaders = document.querySelectorAll('[data-tab]'); 
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) { 
    item.addEventListener('click', function() {  
        
        contentBoxes.forEach(function (item) {  
            item.classList.add('hidden');
        })

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    })
})

let buttons = document.querySelectorAll('.nav-link');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});