// Esses dados simulam as informações que podem vir, por exemplo, de uma API
// Teremos que digitar tanto o array de mensagens quanto os objetos que podemos encontrar dentro

export const mensagens = [
  {
    id: 1,
    remitente: {
      nome: "Misty",
      sobrenome: "Williams",
      tipo: "TREINADOR",
      cidadeDeNascimento: {
        cidade: "Ciudad Celeste",
        regiao: "Kanto",
      },
    },
    email: "misty@ciudadCeleste.com",
    assunto: "Treinamento",
    data: "10/02/2022",
    texto:
      "Olá Ash, muito tempo! Você acha que nos reunimos para treinar nossos pokémons?",
  },
  {
    id: 2,
    remitente: {
      nome: "Brock",
      sobrenome: "Williams",
      tipo: "TREINADOR",
      cidadeDeNascimento: {
        cidade: "Ciudad Plateada",
        regiao: "Kanto",
      },
    },
    email: "brock@ciudadPlateada.com",
    assunto: "Felicidades",
    data: "10/02/2022",
    texto:
      "Ash, parabéns pelo seu novo Pokémon Center. Desejo-lhe muito sucesso!",
  },
  {
    id: 3,
    remitente: {
      nome: "Tracey",
      sobrenome: "Sketchit",
      tipo: "ESTUDANTE",
      cidadeDeNascimento: {
        cidade: "Pueblo Paleta",
        regiao: "Kanto",
      },
    },
    email: "tracey@laboratorioOak.com",
    assunto: "Descoberta",
    data: "10/02/2022",
    texto:
      "Olá Ash, descobrimos algo importante. Quando puder, passe pelo laboratório. Saudações.",
  },
  {
    id: 4,
    remitente: {
      nome: "Profesor",
      sobrenome: "Oak",
      tipo: "PROFESSOR",
      cidadeDeNascimento: {
        cidade: "Pueblo Paleta",
        regiao: "Kanto",
      },
    },
    email: "yukinari@laboratorioOak.com",
    assunto: "Reunião de trabalhoo",
    data: "10/02/2022",
    texto: "Olá Ash, a reunião de hoje é às 19:00. Espero te ver. Saudações!",
  },
];
