const fs = require('fs');

const crearArchivo = async ( base = 5, listar = false, limit = 10 ) => {
    try {   
        let salida = '';

        for(let i = 1; i <= limit; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        if ( listar ) {
            console.log('=====================================');
            console.log(`       Tabla del: ${ base }     `);
            console.log('=====================================');
            console.log(salida);
        }
        
        fs.writeFileSync(`./output/tabla-${ base }.txt`, salida);
        
        return `tabla-${ base }.txt creada`;
    } catch (err) {

    }

}

module.exports = {
    crearArchivo: crearArchivo
}