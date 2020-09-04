import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const [imageLink, setImageLink] = useState();
  const [username, setUsername] = useState();
  const [textColor, setTextColor] = useState();
  const [shadows, setShadows] = useState(false);
  const [darkBackground, setDarkBackground] = useState(true);

  return (
    <div
      className="AppBackground"
      style={{
        backgroundImage: imageLink
          ? "url(" + imageLink + ")"
          : `url(${require("./assets/markus-spiske-k0rVudBoB4c-unsplash.jpg")})`,
      }}
    >
      <div className="App">
        <div className="menu">
          <span className="titleMenu">Postgen</span>
        </div>
        <div className="contentView">
          <div className="leftSideView">
            <span className="topMessage">
              Faça posts incríveis para suas redes sociais!
            </span>
            <form>
              <textarea
                placeholder="Conteúdo"
                type="text"
                className="fraseInput inputText"
                onChange={(event) => setText(event.target.value)}
              />
              <label>Este será o principal conteúdo do seu post.</label> <br />
              <input
                placeholder="Imagem de fundo"
                className="inputText"
                onChange={(event) => setImageLink(event.target.value)}
              />
              <label>
                Insira o link da imagem que deve preencher o fundo do post.
              </label>
              <br />
              <input
                placeholder="Seu @"
                className="inputText"
                onChange={(event) => setUsername(event.target.value)}
              />
              <label>
                Insira o seu username para que possam te identificar.
              </label>
              <br />
              <input
                className="inputColor"
                type="color"
                onChange={(e) => setTextColor(e.target.value)}
              />
              <label>Selecione a cor do texto</label>
              <br />
              <input
                type="checkbox"
                checked={shadows}
                style={{ marginTop: "2em" }}
                onChange={(e) => setShadows(e.target.checked)}
              />
              <label onClick={(e) => setShadows(!shadows)}>
                Manter sombras
              </label>
              <br />
              <input
                type="checkbox"
                checked={darkBackground}
                style={{ marginTop: "2em" }}
                onChange={(e) => setDarkBackground(e.target.checked)}
              />
              <label onClick={(e) => setDarkBackground(!darkBackground)}>
                Escurecer fundo
              </label>
            </form>
          </div>
          <div className="previewView">
            <span className="topMessage">Assim seu post ficará no final:</span>
            <div
              className="item"
              style={{
                backgroundImage: "url(" + imageLink + ")",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5em",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: darkBackground
                    ? "rgba(0, 0, 0, 0.50)"
                    : "transparent",
                  transition: "200ms",
                }}
              >
                <span
                  style={{
                    margin: "3em",
                    fontSize: 28,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: textColor,
                    textShadow: shadows
                      ? "0 0.3em 0.5em rgba(0, 0, 0, 0.75)"
                      : "none",
                  }}
                >
                  {text}
                </span>
                {username ? (
                  <span
                    className="username"
                    style={{
                      position: "absolute",
                      bottom: "7em",
                      padding: "0.5em",
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      borderRadius: "0.5em",
                    }}
                  >
                    {username}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <a className="downloadBtn">Baixar</a>
          </div>
        </div>
        <div className="credits">
          <span>
            Criado por{" "}
            <a href="https://postgen.eduardovilar.now.sh" className="website">
              Eduardo Vilar
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
