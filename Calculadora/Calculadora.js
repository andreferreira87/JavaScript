function calcular(){
    var operacao = document.getElementById("operacao").value; //recupera o valor do elemento selecionado na lista atraves do ID

    var num1 = document.getElementById('num1').value; //recupera o valor do elemento digitado atraves do ID

    var num2 = document.getElementById('num2').value; //recupera o valor do elemento digitado atraves do ID

    if(num1 == '' || num1 == null){
        alert("Favor digitar um número valido para operação no 1º campo");
        return false;
    }

    if(num2 == '' || num2 == null){
        alert("Favor digitar um número valido para operação no 2º campo");
        return false;
    }

    num1 = parseFloat(num1); //mudando o valor de string para numero real
    num2 = parseFloat(num2); //mudando o valor de string para numero real

    

    var resultado = null;

    switch(operacao){
        case '1'://subtração
        resultado = num1 - num2;
        break;

        case '2'://adição
        resultado = num1 + num2;
        break;

        case '3': //multiplicação
        resultado = num1 * num2;
        break;

        case '4'://divisão
        resultado = num1 / num2;
        break;

        default:
            alert('A opção selecionada é invalida');
            return false;
    }



    document.getElementById('resultado').value = resultado; 
}