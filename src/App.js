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
        When it comes to Unity, my starting point for any project is usually a
        small idea or mechanic that I am curious about how to implement in the
        engine. I have made about 40 small prototypes over the last few years
        continually developing my Unity skills. Below I have handpicked some of
        my favourites, I have chosen these as they showcase some of the talent I
        have in Game Development. As I have been in full time education and then
        in full time employment for the last few years I have had not much time
        to work on a long extensive unity project so I believe these examples do
        not show my true potential in Unity but provide an insight into my
        problem solving skills. Most of these projects I had started a long time
        ago so the code is not the greatest but I hope they will give you an
        idea as to some of the things I can achieve in Unity.
      </p>
      <p className="intro">
        I know I have knowledge and skills to bring to a project and would
        appreciate the opportunity to work alongside others in a collaborative
        project.
      </p>
      <p className="intro">
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
