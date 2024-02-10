const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Um protocolo de comunicação entre servidores",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Concatenação de strings",
        "Divisão de números",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 'texto';",
        "var myVar = true;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de objetos para representar documentos XML",
        "Uma técnica avançada de criptografia",
        "Uma interface que representa a estrutura de um documento HTML ou XML",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Criar um novo elemento HTML",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Remover um elemento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função e é executada posteriormente",
        "Um tipo de variável global",
        "Um comando para interromper a execução do código",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do JSON em JavaScript?",
      respostas: [
        "Uma linguagem de estilos para HTML",
        "Um formato de arquivo para armazenar dados estruturados",
        "Um método para criar loops em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica para elevar o desempenho de funções assíncronas",
        "O comportamento de mover declarações para o topo do seu contexto de execução",
        "Um tipo de erro de sintaxe",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, são sinônimos",
        "let é usado para variáveis mutáveis, e const é usado para variáveis imutáveis",
        "const só pode ser usado em loops while",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'closure' em JavaScript?",
      respostas: [
        "Uma função que não tem acesso ao escopo externo",
        "Um tipo de erro de tempo de execução",
        "O fenômeno em que uma função tem acesso ao escopo em que foi criada",
      ],
      correta: 2
    },
  ];
  
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalQuests = perguntas.length
  const showTotal = document.querySelector("#acertos span")
  showTotal.textContent = corretas.size + " de " + totalQuests
  

  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      dt.querySelector("input").onchange = (event) => {
        const Correçao = event.target.value == item.correta
        corretas.delete(item)
        if(Correçao) {
          corretas.add(item)
        }
  
          showTotal.textContent = corretas.size + " de " + totalQuests
      }
  
  
      quizItem.querySelector("dl").appendChild(dt)
    }
    quizItem.querySelector("dl dt").remove()
  
  

    quiz.appendChild(quizItem)
  }