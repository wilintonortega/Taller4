// 1.	Pregunto si quiere el huevo frito.
// Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// Una vez cocinado le pregunto si quiere sal en el huevo.
// Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

// const huevofrito=prompt("quiere el huevo frito? -- Si o No").toLowerCase();
// const qsal=prompt("quiere sal en el Huevo? -- Si o No").toLowerCase();

// let huevo="";
// let sal="";

// if(huevofrito=="si" && qsal=="si"){
//     alert(`Se sirve plato: Huevo frito con Sal`);
// }   
// else if(huevofrito=="no" && qsal=="si"){
//     alert(`Se sirve plato: Huevo cocinado con Sal`);
// }
// else if(huevofrito=="si" && qsal=="no"){
//     alert(`Se sirve plato: Huevo frito sin sal`);
// }else{
//     alert(`Se sirve plato: Huevo cocinado sin Sal `);

// }

/*

2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado.
 “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
Miguel tiene $1.000 
Carlos tiene $2.000 
Manuel tiene $500 
Los precios de helados son los siguientes:
Bonais: $400
Palito de helado de agua: $1.000 
Palito de helado de crema: $2.200
Bombón helado con arequipe: $1.500
Bombón helado con chispas de chocolate: $2.500
Bombón helado con fresas: $2.800
Medio litro de helado: $ 2.000

El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
El programa también tiene que poder dar los vueltos de su compra con su factura
*/

/*
let helados=[
    {
    nombre:"Bonais", 
    precio:400,
    },
    {
    nombre:"Palito de helado de agua", 
    precio:1000,
    },
    {
    nombre:"Palito de helado de crema", 
    precio:2200,
    },
    {
    nombre:"Bombón helado con arequipe", 
    precio:1500,
    },
    {
    nombre:"Bombón helado con chispas de chocolate", 
    precio:2500,
    },
    {
    nombre:"Bombón helado con fresas", 
    precio:2800,
    },
    {
    nombre:"Medio litro de helado", 
    precio:2000,
    }
]

// const miguel=1000;
// const carlos=2000;
// const manuel=500;

function cliente() {
    for (let i = 0; i < 3; i++) {
        
        nombreCliente=prompt("Ingrese el nombre del cliente");
        dineroCliente=prompt("Ingrese el dinero del cliente");
        console.log(`el cliente ${nombreCliente} puede comprar: `);
        const posiblesHelados=helados.filter(helado=>helado.precio<=dineroCliente)
        console.table(posiblesHelados);

        const resultado=helados.map(helado => {
        
           if(helado.precio <= dineroCliente) {
            console.log(`cambio: ${helado.nombre} " - - -" ${dineroCliente-helado.precio}`);
            
           }
        } 
      
        );
        }
}

cliente()
*/


/*

2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado.
 “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
Miguel tiene $1.000 
Carlos tiene $2.000 
Manuel tiene $500 
Los precios de helados son los siguientes:
Bonais: $400
Palito de helado de agua: $1.000 
Palito de helado de crema: $2.200
Bombón helado con arequipe: $1.500
Bombón helado con chispas de chocolate: $2.500
Bombón helado con fresas: $2.800
Medio litro de helado: $ 2.000

El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
El programa también tiene que poder dar los vueltos de su compra con su factura
*/
const miestilo="background:wheat;padding: 10px 5px;font-family:sans-serif;border: dashed darkslateblue;margin-top: 5px; content: &#128293";
const helados=[[400,"Bonais"],[1000,"Palito de helado de agua"],[2200,"Palito de helado de crema"],[1500,"Bombón helado con arequipe"],[2500,"Bombón helado con chispas de chocolate"],[2800,"Bombón helado con fresas"],[2000,"Medio litro de helado"]];
let nvalor=[];
const emoHelado=String.fromCodePoint(0x1F367)

// console.log(helados[3][1]);//primero es posicion segundo es eleccion de parametros en cada array

for (let i = 0; i < 3; i++) {
        
    nombreCliente=prompt("Ingrese el nombre del cliente").toUpperCase();
    dineroCliente=prompt("Ingrese el dinero del cliente");
    console.log(` %c ${nombreCliente} Puede comprar con $${dineroCliente}: `,miestilo);
        for (let j = 0; j < helados.length; j++) {
            let preciomax=dineroCliente>=helados[j][0]
            if(preciomax){
                console.table(`${emoHelado} $${helados[j]} \n`);
                //defino variable para insertar datos en nuevo array nvalor
                helados.sort(function (a,b) {
                    return a[0]-b[0];                  
                })
               nvalor.push(helados[j])
            }
            //funcion para ordenar valores
        } 

        console.log(`%cHelado seleccionado: ${emoHelado} ${nvalor[nvalor.length-1]}`,miestilo);
        //console.log(nvalor[0][0]);
        let cambio=dineroCliente-(nvalor[nvalor.length-1][0])
        //console.log(cambio);
        console.log(`%cEl cambio por comprar el helado mas caro de la lista con $${dineroCliente} es: $${cambio} `,miestilo);
        nvalor=[];





}