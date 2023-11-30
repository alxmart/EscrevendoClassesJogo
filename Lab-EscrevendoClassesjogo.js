/*
Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉
*/

class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {

        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usando magia.";
                break;
            case "guerreiro":
                ataque = "usando espada.";
                break;
            case "monge":
                ataque = "usando artes marciais.";
                break;
            case "ninja":
                ataque = "usando shuriken.";
                break;
            default:
                ataque = "usando tipo de ataque não identificado.";
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

const mago = new Heroi("Mago das Neves", 35, "mago");
const guerreiro = new Heroi("McCloud", 30, "guerreiro");
const ninja = new Heroi("Ishioka", 52, "ninja");
const monge = new Heroi("Zenoiah", 52, "monge");
const soldado = new Heroi("Rambo", 29, "soldado");

mago.atacar();
guerreiro.atacar(); 
ninja.atacar();
monge.atacar();
soldado.atacar();
