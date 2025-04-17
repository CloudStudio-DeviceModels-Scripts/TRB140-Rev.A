function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

     
      
    // Parsear y almacenar la temperatura
    
    if (jsonPayload.temperature != null) {
        var temperatureSensor = device.endpoints.byAddress(1);
        temp = jsonPayload.temperature;
        temp = temp / 10 ;
        let  myDate = new Date(jsonPayload.timestamp*1000);
        temperatureSensor.updateTemperatureSensorStatus(temp,myDate.toLocaleString());
        env.log("Temperatura ->>  ",temp);
        env.log("Hora ->>  ",myDate.toLocaleString());    
        
    }
}