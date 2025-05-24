(function(){
// tested for git
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {  // Prevents "undefined" from being appended
                screen.value += value;
            }
        });
    });
    

    equal.addEventListener('click', function(e) {
        if (screen.value === "" || screen.value.includes("undefined")) {
            screen.value = "Error";  // Prevent invalid evaluation
        } else { 
            try {
                let answer = eval(screen.value);
                screen.value = answer;
                
            } catch (error) {
                screen.value = "Error"; // Handle syntax errors
            }
        }
    });
    
    clear.addEventListener('click', function(e)
    {
        screen.value = ''; 
    })

})();
