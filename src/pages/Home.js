import React, { useState } from "react";
import "../App.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import BrowserDetection from "react-browser-detection";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [text, setText] = useState();
  const [imageLink, setImageLink] = useState("https://picsum.photos/1024/1024");
  const [username, setUsername] = useState();
  const [textColor, setTextColor] = useState();
  const [shadows, setShadows] = useState(false);
  const [logo, setLogo] = useState("");
  const [logoWidth, setLogoWidth] = useState(10);
  const [roundCorners, setRoundCorners] = useState(0);
  const [darkBackground, setDarkBackground] = useState(true);
  const [warnMessage, setWarnMessage] = useState();
  const [loading, setLoading] = useState({ opacity: 1, display: "flex" });
  const [changeSize, setChangeSize] = useState(1080);

  const history = useHistory();

  const values = [
    text,
    imageLink,
    username,
    textColor,
    shadows,
    logo,
    logoWidth,
    roundCorners,
    darkBackground,
  ];

  const browserHandler = {
    chrome: () => "chrome",
    googlebot: () => "googlebot",
    default: (browser) => browser,
  };

  const reloadImage = () => {
    startLoad();
    setImageLink("");
    setTimeout(() => {
      if (changeSize === 1080) {
        setImageLink("https://picsum.photos/1024/1024");
        setChangeSize(1024);
      } else {
        setImageLink("https://picsum.photos/1080/1080");
        setChangeSize(1080);
      }
    }, 2000);
  };

  const startLoad = () => {
    setLoading({ opacity: 0, display: "flex" });
    setTimeout(() => {
      setLoading({ opacity: 1, display: "flex" });
    }, 100);
  };

  const stopLoad = () => {
    setLoading({ opacity: 0, display: "flex" });
    setTimeout(() => {
      setLoading({ opacity: 0, display: "none" });
    }, 100);
  };

  const dimiss = () => {
    setWarnMessage("none");
  };
  return (
    <div
      className="AppBackground"
      style={{
        backgroundImage: "url(" + imageLink + ")",
      }}
    >
      <div className="App">
        <div className="menu">
          <span className="titleMenu">Postgen</span>
        </div>
        <div className="contentView">
          <div className="leftSideView">
            <span className="topMessage" role="img" aria-label="festa">
              🎉 Faça posts incríveis para suas redes sociais!
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
                onChange={(event) => {
                  startLoad();
                  setImageLink(event.target.value);
                }}
                onSubmit={(event) => {
                  startLoad();
                  setImageLink(event.target.value);
                }}
              />
              <label>
                Para um melhor resultado, não use o sistema de imagens
                aleatórias. Insira o link da imagem que deve preencher o fundo
                do post.
              </label>
              <br />
              <input
                placeholder="Sua logo"
                className="inputText"
                onChange={(event) => {
                  setLogo(event.target.value);
                }}
              />
              <label>
                Insira o link da sua logo (funciona melhor com arquivos .png)
              </label>
              <br />
              <input
                type="range"
                value={logoWidth}
                placeholder="Sua logo"
                className="inputText"
                onChange={(event) => {
                  setLogoWidth(event.target.value);
                }}
              />
              <label>Ajuste o tamanho da logo</label>
              <br />
              <input
                placeholder="Seu @username"
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
                type="range"
                value={roundCorners}
                className="inputText"
                style={{ marginTop: "2em" }}
                onChange={(e) => setRoundCorners(e.target.value)}
              />
              <label>Defina a suavidez das bordas</label>
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

            <img
              alt="loadImage"
              src={imageLink}
              style={{ display: "none" }}
              onLoad={() => stopLoad()}
              onError={() => {
                if (imageLink !== "") {
                  alert("Não foi possível carregar esta imagem");
                  reloadImage();
                } else {
                  reloadImage();
                }
              }}
              onProgress={(e) => alert(e.target.value)}
            />
            <div
              className="item"
              style={{
                backgroundImage: "url(" + imageLink + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
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
                      padding: "0.5em",
                      bottom: "1em",
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      borderRadius: "0.5em",
                      zIndex: 7,
                    }}
                  >
                    {username}
                  </span>
                ) : (
                  <></>
                )}
                {logo ? (
                  <img
                    alt={logo ? "logo" : ""}
                    style={{
                      width: `${logoWidth}%`,
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      padding: 10,
                      borderRadius: `${roundCorners}px`,
                    }}
                    src={logo}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <a
              className="downloadBtn greenBtn"
              onClick={() =>
                history.push({ pathname: "/render", data: values })
              }
            >
              ⬇️ Renderizar Imagem
            </a>
            <a className="downloadBtn blueBtn" onClick={() => reloadImage()}>
              🔄 Trocar imagem
            </a>
          </div>
        </div>
        <div className="credits">
          <span>
            Made with ❤️ by{" "}
            <a href="https://postgen.eduardovilar.now.sh" className="website">
              Eduardo Vilar
            </a>
          </span>
        </div>
      </div>
      <div
        className="loadingView"
        style={{
          display: loading.display,
          opacity: loading.opacity,
          backgroundColor: "rgba(0, 0, 0, 0.90)",
        }}
      >
        <h1>Carregando...</h1>
        <Loader type="TailSpin" height={40} width={40} color="#fff" />
      </div>
      <div className="warnView" style={{ display: warnMessage }}>
        <h1>
          <BrowserDetection>{browserHandler}</BrowserDetection>
        </h1>
        <span className="button" onClick={() => dimiss()}>
          🥱 Dispensar
        </span>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
}

export default Home;
