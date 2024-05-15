let resultado = document.getElementById('resultado');

let promptNum1 = document.getElementById('num1').value;

let promptNum2 = document.getElementById('num2').value;




    document.getElementById('soma').addEventListener('click', function(){
        let num1 = parseFloat(promptNum1);
        let num2 = parseFloat(promptNum2);
        soma = num1 + num2;

        resultado.textContent = soma;
        console.log(soma);
    }
    )

    document.getElementById('sub').addEventListener('click', function(){
        let num1 = parseFloat(promptNum1);
        let num2 = parseFloat(promptNum2);
        sub = num1 - num2;

        resultado.textContent = sub;
        
    }
    )

    document.getElementById('mult').addEventListener('click', function(){
        let num1 = parseFloat(promptNum1);
        let num2 = parseFloat(promptNum2);
        mult = num1 * num2;

        resultado.textContent = mult;
       
    }
    )

    document.getElementById('div').addEventListener('click', function(){
        let num1 = parseFloat(promptNum1);
        let num2 = parseFloat(promptNum2);
        div = num1 / num2;

        resultado.textContent = div;
      
    }
    )

    



   

