class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        throw new Error(`Tipo de herói inválido: ${this.tipo}`);
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Merlin", 70, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Li", 40, "monge"),
  new Heroi("Hanzo", 25, "ninja"),
];

for (let indice = 0; indice < herois.length; indice++) {
  herois[indice].atacar();
}
