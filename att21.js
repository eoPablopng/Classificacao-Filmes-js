let filmes = [];

while (true) {
  let titulo = prompt("Qual o título do filme?");
  let restricao = prompt("Qual a nota do filme (IMDb)?");

  if (titulo === null || restricao === null) break;

  let nota = Number(restricao);
  if (!Number.isNaN(nota)) {
    filmes.push({ titulo, restricao: nota });
  }
}

console.log("Filmes com nota abaixo de 7:");
for (let filme of filmes) {
  if (filme.restricao < 7) {
    console.log(`${filme.titulo} (${filme.restricao})`);
  }
}

console.log("Filmes com nota 7 ou acima:");
for (let filme of filmes) {
  if (filme.restricao >= 7) {
    console.log(`${filme.titulo} (${filme.restricao})`);
  }
}
