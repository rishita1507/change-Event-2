const cars=document.getElementById("cars")

function oncars(eve){
    let value = eve.target.value;
    let allDivs =[...document.querySelectorAll('.cars')];

    allDivs.forEach(d=>{
        d.classList.add('d-none');

    });
    let selectedDiv =[...document.querySelectorAll('.'+value)];
    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    })
}



cars.addEventListener('change', oncars)