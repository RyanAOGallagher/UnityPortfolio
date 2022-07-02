import "./App.css";
import Game from "./Game";
import GameData from "./GameData.json";
import CVpdf from "./RyanGallagherCV.pdf";
function App() {
  return (
    <div className="App">
      <h1>Ryan Gallagher Unity Portfolio</h1>
      <a className="button-4" href={CVpdf} download>
        CV
      </a>
      <a
        className="button-4"
        href="https://www.linkedin.com/in/ryan-gallagher-20a5b5147/"
      >
        LinkedIn
      </a>
      <a className="button-4" href="https://ryangallagher.netlify.app">
        Other Projects
      </a>
      <p className="intro">
        {" "}
        When it comes to Unity, my inspiration is usually a small idea or
        mechanic that I am curious about how to implement and so I have mostly
        made small prototypes of games and nothing too substantial. I have made
        about 40 small prototypes over the last few years continually developing
        my Unity skills. Below I have handpicked some of my favourite small
        projects I have worked on which I believe showcase some of the talent I
        have in Game Development. However, having been in full time education or
        employment for the last few years I have had not much time to work on a
        long extensive unity project so I believe these examples do not show my
        true potential in Unity. Most of these projects I had started a long
        time ago so the code is not the greatest but I hope they will give you
        an idea as to some of the things I can achieve in Unity.
      </p>
      <p>
        If you are having any trouble downloading or running the games please do
        not hesitate to let me know.
      </p>
      {GameData.map((game) => {
        return (
          <div>
            <Game
              title={game.title}
              description={game.description}
              image1={game.image1}
              image2={game.image2}
              image3={game.image3}
              image4={game.image4}
              link={game.link}
              link1={game.link1}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
