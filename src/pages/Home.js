import React, { useState } from "react";
import "../App.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import BrowserDetection from "react-browser-detection";
import { Link, useHistory } from "react-router-dom";
import DefaultImage from '../assets/mike-meyers-IJyXoyGmiZY-unsplash.jpg'

function Home() {
  const [text, setText] = useState();
  const [imageLink, setImageLink] = useState(DefaultImage);
  const [username, setUsername] = useState();
  const [textColor, setTextColor] = useState("#fff");
  const [shadows, setShadows] = useState(false);
  const [logo, setLogo] = useState("");
  const [logoWidth, setLogoWidth] = useState(60);
  const [roundCorners, setRoundCorners] = useState(20);
  const [darkBackground, setDarkBackground] = useState(true);
  const [warnMessage, setWarnMessage] = useState();
  const [loading, setLoading] = useState({ opacity: 1, display: "flex" });
  const [changeSize, setChangeSize] = useState(1080);

  
  const history = useHistory();

  const values = {
    text,
    imageLink,
    username,
    textColor,
    shadows,
    logo,
    logoWidth,
    roundCorners,
    darkBackground,
  };

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
        setImageLink(DefaultImage);
        setChangeSize(1024);
      } else {
        setImageLink("https://source.unsplash.com/random/1080x1080?sig=1");
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
              <br/>
              <label>Este será o principal conteúdo do seu post.</label> <br />
              <input
                placeholder="Imagem de fundo"
                className="inputText"
                onChange={(event) => {
                  startLoad();
                  setImageLink(event.target.value);
                }}
              />
              <br/>
              <label>
                Insira o link de uma imagem.
              </label>
              <br />
              <input
                placeholder="Imagem de destaque"
                className="inputText"
                onChange={(event) => {
                  setLogo(event.target.value);
                }}
              />
              <br/>
              <label>Insira o link da sua imagem de destaque</label>
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
              <label>Ajuste o tamanho da imagem de destaque</label>
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
                Escurecer fundo (Recomendado)
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
            {/* <div
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
                  className="contentText"
                  style={{
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
                    // style={{
                    //   position: "absolute",
                    //   padding: "0.5em",
                    //   bottom: "1em",
                    //   backgroundColor: "rgba(255, 255, 255, 0.25)",
                    //   borderRadius: "0.5em",
                    //   zIndex: 7,
                    // }}
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
            </div> */}
            <div
              className="item"
              style={{
                backgroundImage: `url(${imageLink})`,
              }}
            >
              <div
                className="filter"
                style={{
                  backgroundColor: darkBackground
                    ? "rgba(0, 0, 0, 0.50)"
                    : "transparent",
                    borderRadius: '1em'
                }}
              >
                {text ? (
                  <span
                    className="contentText"
                    style={{
                      color: textColor,
                      textShadow: shadows
                        ? "0 0.3em 0.5em rgba(0, 0, 0, 0.75)"
                        : "none",
                    }}
                  >
                    {text}
                  </span>
                ) : (
                  <></>
                )}

                {logo ? (
                  <img
                    src={logo}
                    className="logo"
                    style={{
                      width: `${logoWidth}%`,
                      borderRadius: `${roundCorners}px`,
                    }}
                  />
                ) : (
                  <></>
                )}
                {username ? (
                  <span className="username">{username}</span>
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
    </div>
  );
}

export default Home;
