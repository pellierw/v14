let loading = document.querySelector('.loading');
let pass = document.querySelector('.pass');

const load = function(){
    loading.style.display = 'none';
    pass.style.display = 'block';
}

setTimeout(load, 5000) 

