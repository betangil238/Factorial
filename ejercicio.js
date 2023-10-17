const numeroInput = document.getElementById("numeroInput");
const calcular = document.getElementById("calcular");
const resultadoNum = document.getElementById("resultado");
const expresionNum=document.getElementById("expresion");
function factorial() {
    const numero = numeroInput.value;
    if (isNaN(numero) || numero%1 !=0) {
        mostrarAlertaRechazo();
        numeroInput.value="";
    } else {
        let expresion="El resultado de la expresion ";
        const resultado=calcularFactorial(numero);
        resultadoNum.innerHTML=resultado;
        for (i=numero;i>=1;i--){
            expresion+= `${i} * `
        }
        expresion = expresion.substring(0, expresion.length - 2);
        expresion+= " es:"
        expresionNum.innerHTML=expresion;
        numeroInput.value="";
    }
};

numeroInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        factorial();
    }
});

function calcularFactorial(numero){

    if(numero==1){
        return 1;
    }
    return numero* calcularFactorial(numero-1);
}

// funcion que muestra una alerta de error
function mostrarAlertaRechazo() {
    Swal.fire({
        title: 'Error',
        text: `Ingrese un numero valido`,
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            container: 'mi-alerta-error',
            title: 'mi-titulo-error',
            content: 'mi-contenido-error',
            confirmButton: 'mi-boton-error'
        }
    });
}