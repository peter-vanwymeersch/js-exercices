function conversionTemperature() {
   let typeConversion;
   let tempAConvertir;
   let tempConvertie;
   let temp;

   typeConversion = prompt('Choisir le type de conversion:\n\n0. Fin du programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit');
   tempAConvertir = prompt('Saisir la température à convertir');
   temp = parseFloat(tempAConvertir);
   switch (typeConversion) {
        case '0':
            break;
        case '1':
            tempConvertie = (temp * (9 / 5) + 32);
            alert('La température convertie vaut '+tempConvertie+' Fahrenheit');
            break;
        case '2':
            tempConvertie = temp + 273.15;
            alert('La température convertie vaut '+tempConvertie+' Kelvin');
        break;
        case '3':
            tempConvertie = (temp - 32) / (9 / 5);
            alert('La température convertie vaut '+tempConvertie+' Celsius');
            break;
        case '4':
            tempConvertie = ((temp - 32) * (5 / 9)) + 273.15;
            alert('La température convertie vaut '+tempConvertie+' Kelvin');
            break;
        case '5':
            tempConvertie = temp - 273.15;
            alert('La température convertie vaut '+tempConvertie+' Celsius');
            break;
        case '6':
            tempConvertie = (temp * (9 / 5) - 459.67);
            alert('La température convertie vaut '+tempConvertie+' Fahrenheit');
            break;
        default:
   }
}