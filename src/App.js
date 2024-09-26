import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Raro",
      cor: "#20880B",
    },
    {
      id: uuidv4(),
      nome: "Super-Raro",
      cor: "#25B1FC",
    },
    {
      id: uuidv4(),
      nome: "Épico",
      cor: "#A500E3",
    },
    {
      id: uuidv4(),
      nome: "Mítico",
      cor: "#E12E41",
    },
    {
      id: uuidv4(),
      nome: "Lendário",
      cor: "#DDC813",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "NITA",
      classe: "Destruidor",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/tudo-sobre-nita-brawl-stars-dicas-estrategias-wiki.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BARLEY",
      classe: "Detonador",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/tudo-sobre-barley-brawl-stars-dicas-estrategias-wiki.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BULL",
      classe: "Tanque",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/tudo-sobre-bull-brawl-stars-dicas-estrategias-wiki.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "POCO",
      classe: "Suporte",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/poco-brawl-stars-dicas.png",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "TICK",
      classe: "Detonador",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/06/tick-brawl-stars-dicas-estrategias-wiki.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DARRYL",
      classe: "Tanque",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2018/07/darryl-brawl-stars-dicas.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JESSIE",
      classe: "Controle",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/jessie-icone-brawl-stars-dicas.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PENNY",
      classe: "Controle",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2018/06/penny-icone-brawl-stars-dicas.png",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "EMZ",
      classe: "Controle",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/10/emz-brawl-stars-dicas.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "STU",
      classe: "Algoz",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/03/stu-brawl-stars-dicas.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BO",
      classe: "Controle",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/tudo-sobre-bo-brawl-stars-dicas-estrategias-wiki.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BELLE",
      classe: "Tiro Preciso",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/04/belle-brawl-stars-dicas.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "TARA",
      classe: "Destruidor",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2018/07/tara-brawl-stars-dicas-estrategias-wiki.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BYRON",
      classe: "Suporte",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2020/12/byron-brawl-stars-dicas.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SQUEAK",
      classe: "Suporte",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/04/squeak-brawl-stars-dicas.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "FANG",
      classe: "Algoz",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/12/fang-icone-brawl-stars-dicas.png",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "CORVO",
      classe: "Algoz",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/corvo-brawl-stars-dicas.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "MEG",
      classe: "Tanque",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2021/09/meg-icone-brawl-stars-dicas.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SPIKE",
      classe: "Destruidor",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2017/06/spike-brawl-stars-dicas-estrategias-wiki.png",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SANDY",
      classe: "Controle",
      imagem:
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/09/sandy-do-brawl-stars-dicas.png",
      time: times[4].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };
  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }])
        }
      />
      <section className="times">
        <h1>Brawl Stars</h1>
        {times.map((time, indice) => (
          <Time
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
