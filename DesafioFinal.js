//desafio final
let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate", "Pão de Queijo"];

console.log("Lista inicial de produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

produtos.push("Refrigerante");


produtos.shift();

produtos[1] = "Esfiha";

console.log("\nLista atualizada:");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

console.log("\nQuantidade de produtos: " + produtos.length);

let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === "Coxinha") {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Produto 'Coxinha' encontrado!");
} else {
    console.log("Produto 'Coxinha' não encontrado.");
}
