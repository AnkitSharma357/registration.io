function fetch_details(){
    let name = document.querySelector('.name').value;
    let mobile = document.querySelector('.phone').value;
    let area = document.querySelector('.Area').value;
    let Facilitator = document.querySelector('.Facilitator').value;
    let program = document.querySelector('.program_attend').value;
    let comments = document.querySelector('.textarea').value;
    let day = document.querySelector('.Suitable_day').value;
    console.log(name);
    console.log(mobile);
    console.log(area);
    console.log(Facilitator);
    console.log(program);
    console.log(comments);
    console.log(day);
    nulleverything();
}
function nulleverything(){
    let name = document.querySelector('.name');
    name.value =''; 
    let mobile = document.querySelector('.phone');
    mobile.value ='';
    let area = document.querySelector('.Area');
    area.value ='';
    let Facilitator = document.querySelector('.Facilitator');
    Facilitator.value='';
    let program = document.querySelector('.program_attend');
    program.value =''; 
    let comments = document.querySelector('.textarea');
    comments.value = '';
    
}

