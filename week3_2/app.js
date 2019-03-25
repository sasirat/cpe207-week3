document.querySelector('#output').style.visibility = 'hidden';
document.querySelector('#lbsinput').addEventListener('input',updateOutput);
function updateOutput(e){
    // console.log(e.target.value);
    let lbs = e.target.value;
    if(lbs === ''){
        document.querySelector('#output').style.visibility = 'hidden';
    }else{
        document.querySelector('#output').style.visibility = '';

        document.querySelector('#gramsOutput').innerHTML = lbs*453.592;

        document.querySelector('#KgOutput').innerHTML = lbs*0.453592

        document.querySelector('#ounceOutput').innerHTML = lbs*16;
    }
}