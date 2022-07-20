import todolist from "./fotos/todolist.jpg";
import gitsearch from "./fotos/gitsearch.jpg";
import meudiarioreprograma from "./fotos/meudiarioreprograma.jpg";
import mdemaravilhosa from "./fotos/mdemaravilhosa.jpg";

const Projetos = [
  {
    id: 1,
    name: "Meu diário Reprograma",
    image: meudiarioreprograma,
    description:
      "Um site sobre conteúdos aprendidos durante o curso da reprograma",
    linkprojeto: "https://meudiarioreprogramalari.netlify.app/",
  },
  {
    id: 2,
    name: "Search GitHub",
    image: gitsearch,
    description: "Site sobre pesquisa de usuários no GitHub",
    linkprojeto:
      "https://github.com/olaari/On17-TodasEmTech_DesafioES6/tree/larissa-oliveira/entrega-projeto/larissa-oliveira",
  },
  {
    id: 3,
    name: "List do list",
    image: todolist,
    description: "Site para fazer listas para o dia a dia",
    linkprojeto:
      "https://github.com/olaari/On17-TodasEmTech-ListToDo/tree/larissa-oliveira",
  },
  {
    id: 4,
    name: "M de Maravilhosa",
    image: mdemaravilhosa,
    description: "Site sobre uma mulher inspiradora",
    linkprojeto: "https://m-de-maravilhosa-ruth-b-ginsburg.netlify.app/",
  },
];
export default Projetos;
