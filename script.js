const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];
  

//a)  Las pizzas que tengan un id impar.

let pizzasConIdImpar = pizzas.filter(pizzas => pizzas.id % 2 !== 0);
console.log(pizzasConIdImpar);
console.log("Las pizzas que tienen un ID impar son: "+ pizzasConIdImpar);

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

let pizzaMenosCara=pizzas.filter(pizzas=> pizzas.precio<600);
console.log(pizzaMenosCara);
console.log("La pizza que vale menos de 500 es: "+ pizzaMenosCara);

//c) El nombre de cada pizza con su respectivo precio.

const nombresYPrecios = pizzas.map(pizzas => {
    return { nombre: pizzas.nombre, precio: pizzas.precio };
});

console.log(nombresYPrecios);
console.log("El nombre de cada pizza con su respectivo precio es: "+ nombresYPrecios)

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

function imprimirIngredientesPorId(id) {
    let objeto = pizzas.find(pizzas => pizzas.id === id);
    if (objeto) {
        console.log(`Ingredientes del objeto con ID ${id}:`);
        objeto.ingredientes.forEach(ingrediente => {
            console.log(ingrediente);
        });
    } else {
        console.log(`No se encontró ningún objeto con ID ${id}`);
    }
}

imprimirIngredientesPorId(1);
imprimirIngredientesPorId(2);
imprimirIngredientesPorId(3);
imprimirIngredientesPorId(4);
imprimirIngredientesPorId(5);
imprimirIngredientesPorId(6);








