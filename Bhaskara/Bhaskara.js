function calcularBhaskara(){

    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    if ( a == '' || a == null) {
        alert("Favor inserir um numero para A");
        return false;
    }

    if ( b == '' || b == null) {
        alert("Favor inserir um numero para B");
        return false;
    }

    if ( c == '' || c == null) {
        alert("Favor inserir um numero para C");
        return false;
    }

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var delta = (b * b) -4 * a * c;

    document.getElementById('delta').value = delta;

    if(delta < 0){
        alert("Não é possivel realizar a raiz quadrada de numeros negativo");
    }

    var x1 = ( -b + Math.sqrt(delta)) / (2 * a);
    var x2 = ( -b - Math.sqrt(delta)) / (2 * a);

    document.getElementById('x1').value = x1;
    document.getElementById('x2').value = x2;

}