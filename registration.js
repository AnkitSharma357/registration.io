function fetch_details(){

    let name = document.querySelector('.name').value;
    let mobile = document.querySelector('.phone').value;
    let area = document.querySelector('.Area').value;
    let Facilitator = document.querySelector('.Facilitator').value;
    let program = document.querySelector('.program_attend').value;
    let comments = document.querySelector('.textarea').value;
    let day = document.querySelector('.Suitable_day').value;

    if(name=='' && mobile=='' && area==''  && comments==''){
        console.log("I am in if loop");
        let notification = document.querySelector('.notificationpanel');
        notification.innerHTML = "Please Enter the Details";
        setTimeout(shownotification,50);
        setTimeout(hidenotification,1500);
    }
    else{
        console.log("I am in else");
        message_in_notification(name);
        console.log(name);
        console.log(mobile);
        console.log(area);
        console.log(Facilitator);
        console.log(program);
        console.log(comments);
        console.log(day);
        nulleverything();
        setTimeout(shownotification,1000);
        setTimeout(hidenotification,3000);
    }

}
function nulleverything(){
    let name = document.querySelector('.name');
    name.value =''; 
    let mobile = document.querySelector('.phone');
    mobile.value ='';
    let area = document.querySelector('.Area');
    area.value ='';
    // let Facilitator = document.querySelector('.Facilitator');
    // Facilitator.value='';
    // let program = document.querySelector('.program_attend');
    // program.value =''; 
    let comments = document.querySelector('.textarea');
    comments.value = '';
    
}
function shownotification(){
    let notification = document.querySelector('.notificationpanel').classList.add('shownotificationpanel');
}
function hidenotification(){
    let notification = document.querySelector('.notificationpanel').classList.remove('shownotificationpanel');
}
function message_in_notification(name){
    let notification = document.querySelector('.notificationpanel');
    notification.innerHTML = name+" Added successfully";

}

