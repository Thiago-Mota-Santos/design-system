import Card from "./components/Card";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Content>
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <Card
            key={card}
            img_url={
              "https://avatars.githubusercontent.com/u/22632046?s=280&v=4"
            }
            title={"Conheça sobre o incrível StoryBook"}
            subtitle={
              "Uma ferramenta que vem ganhando muita popularidade entre os devs"
            }
            description={
              "O Storybook é uma ferramenta muito boa para gestão de componentes no react e no ecossistema javascript em si, ela vem ganhando muito espaço nos últimos tempos principalmente quando se trata de design system, ela tem se tornando algo que é indispensável para as empresas e tem integração com os diversos tipos de sistemas!!! Muito incrível mesmo"
            }
            href={"/"}
          />
        ))}
      </Content>
    </>
  );
}

export default App;
