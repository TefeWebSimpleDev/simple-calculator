    
  /*   
    // Self-Invoking function
    // Did not need to calling for running
(function(){
    // coding here
})();

     // Arrow functions
const functionName=()=>{
    // coding here
}

    // Regular Function
function functionName(){
    // coding here
}
 */


(function(){

    let screen=document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
         //Additional
    let calcOn= document.querySelector('.js-on');
    let calcOff= document.querySelector('.js-off');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
            screen.value+=value;
        })
    })
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value="";
        }
        else{
            let answer =eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

        // Additional
    calcOn.addEventListener('click', function(e){
        screen.value="Opened";
    })

    calcOff.addEventListener('click', function(e){
        screen.value="Closed";
    })

})();
