// 1.	Pregunto si quiere el huevo frito.
// Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// Una vez cocinado le pregunto si quiere sal en el huevo.
// Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

const huevofrito=prompt("quiere el huevo frito? -- Si o No").toLowerCase();
const qsal=prompt("quiere sal en el Huevo? -- Si o No").toLowerCase();

let huevo="";
let sal="";

if(huevofrito=="si" && qsal=="si"){
    alert(`Se sirve plato: Huevo frito con Sal`);
}   
else if(huevofrito=="no" && qsal=="si"){
    alert(`Se sirve plato: Huevo cocinado con Sal`);
}
else if(huevofrito=="si" && qsal=="no"){
    alert(`Se sirve plato: Huevo frito sin sal`);
}else{
    alert(`Se sirve plato: Huevo cocinado sin Sal `);

}


