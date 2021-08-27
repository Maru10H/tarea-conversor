function cambiarDolares() {
    let dolarHoy=102.5
    
    let ingresoMonto=document.getElementById("monto").value
    let conversionAPesos= 0
    let impuestopais =0
    let ganancias= 0
    let totalAPagar=0
    
    conversionAPesos= ingresoMonto * dolarHoy

    impuestopais= conversionAPesos * 0.30
    ganancias= conversionAPesos * 0.35
    totalAPagar= conversionAPesos + impuestopais + ganancias
   
    if(conversionAPesos<=0){
        alert('no se puede calcular eso')
    }else if (ingresoMonto >= 6000){
        alert('no se puede convertir más de 6000')}
        else{
        alert('Valor dólar hoy: $'+dolarHoy+' '+
              ' . La cantidad de: '+ingresoMonto+ ' dólares'+' cuestan: $'+ Math.round(conversionAPesos)+
              ' . El impuesto país es: $'+Math.round(impuestopais)+
              ' . Y la retención de ganancias: $'+Math.round(ganancias)+'. '+ingresoMonto+' dólares tienen un costo total de: $'+Math.round(totalAPagar)+ '. Pasá por tu banco amigo')
              
    }


}