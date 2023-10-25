// codigo que le pida su edad y si es mayor de edad,
// le pregunte su nombre y apellido y lo salude en el dom "Hola fulanito"
// si no, le ponga en el dom, ¡estas bebe!

//  let edad = prompt('Ingresa tu edad');
// let nombre = prompt ('Ingresa tu nombre completo');
// if (edad >= 18){
// document.write ('Hola '+ nombre);
// }
// else{
//     document.write ('Lo siento estas bebe')
// }
// solicitar al usuario sus tres calificaciones con un formulario de 
// 3 inputsy un boton de enviar y sacar el promedio del usuario, si es mayor a 8
// mostrar en el DOM, FELICIDADES LO LOGRASTE, si No,!Sigue estudiando¡

function promedio(){
    let calis1 = parseFloat (document.getElementById("cali1").value);
    let calis2 = parseFloat(document.getElementById("cali2").value);
    let calis3 = parseFloat(document.getElementById("cali3").value);
    promedios = ((calis1+calis2+calis3)/(3));
    document.write ('Tu promedio es de: '+promedios+' ')
    if (promedios >= 8) {
        document.write ('FELICIDADES LO LOGRASTE')
     } else {
        document.write ('¡Lo siento, tienes ordinario!')
     }
}
