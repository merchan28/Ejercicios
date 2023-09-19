up=1;
llanta= new Object;
llanta.marca="alfa14";
llanta.tamaño=140;

moto = new Object;
moto.llanta;


console.log(up);
function mover(up){
mas=llanta.tamaño+up;
return mas;
}
console.log(llanta.tamaño,mover(up),up);
up=Math. floor(Math. random() * (100 - 1 + 1)) + 1;

console.log(llanta.tamaño,mover(up),up);
  
