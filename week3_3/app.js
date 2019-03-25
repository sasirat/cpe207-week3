let filterInput = document.querySelector('#filterInput');
// console.log(filterInput);

filterInput.addEventListener('keyup',filterName);

function filterName(e){
    let value = filterInput.value.toUpperCase();
    // console.log(value);
    let ul = document.querySelector('#names');
    let lis = ul.querySelectorAll('li.collection-item');

    for(let i=0; i<lis.length ; i++){
        let a = lis[i].querySelector('a');
        // console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(value) > -1){
            lis[i].style.display = '';
        }else{
            lis[i].style.display = 'none';
        }
    }
}