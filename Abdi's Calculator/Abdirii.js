let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = ""; // variable to hold the expression

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        if (button.innerHTML == '=') {
            try {
                const result = eval(expression);
                input.value = result;
                expression = result.toString(); // store the result as new expression
            } catch (error) {
                input.value = 'Error';
                expression = '';
            }
        } else if (button.innerHTML == 'AC') {
            expression = '';
            input.value = '';
        } else if (button.innerHTML == 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += button.innerHTML;
            input.value = expression;
        }
    });
});
