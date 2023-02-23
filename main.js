// 1.	Pregunto si quiere el huevo frito.
// Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// Una vez cocinado le pregunto si quiere sal en el huevo.
// Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

const huevofrito=prompt("quiere el huevo frito? -- Si o No");
const qsal=prompt("quiere sal en el Huevo? -- Si o No");

let huevo="";
let sal="";

if(huevofrito=="SI".toLowerCase() && qsal=="SI".toLowerCase()){
    alert(`Se sirve plato: Huevo frito con Sal`);
}   
else if(huevofrito=="NO".toLowerCase() && qsal=="SI".toLowerCase()){
    alert(`Se sirve plato: Huevo cocinado con Sal`);
}
else if(huevofrito=="SI".toLowerCase() && qsal=="NO".toLowerCase()){
    alert(`Se sirve plato: Huevo frito sin sal`);
}else{
    alert(`Se sirve plato: Huevo cocinado sin Sal `);

}


