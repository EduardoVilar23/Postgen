import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useHistory, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import "../App.css";
import { Slide, toast, ToastContainer } from "react-toastify";

export default function ReadyImage() {
  const { data } = useLocation();
  const [loading, setLoading] = useState({ opacity: 1, display: "flex" });
  const [finalImage, setFinalImage] = useState("");
  const [alreadyRendered, setAlreadyRendered] = useState(false);
  const history = useHistory();

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


  const renderImage = () => {
    toast.info('Renderizando, aguarde...', {autoClose: 2700})
    html2canvas(document.getElementById("item"), { allowTaint: true, proxy: true, useCORS: true }).then(
      (canvas) => {
        document.body.appendChild(canvas);
        document.querySelector('canvas').style.filter = 'blur(1em)'
      }
    );
    setTimeout(() => {
      document.querySelector('canvas').style.filter = 'blur(0.5em)'
    }, 2500);
    setTimeout(() => {
      document.querySelector('canvas').style.filter = 'blur(0em)'
      const canvas = document.querySelector("canvas");
      const dataURL = canvas.toDataURL();
      console.log(dataURL);
      setFinalImage(dataURL);
      setAlreadyRendered(true);
      toast.success('Imagem pronta para download!')
    }, 3000);
  };

  const saveImage = () => {
    if (alreadyRendered === true) {
      console.log(finalImage);
      // history.push({ pathname: finalImage });
    } else {
      renderImage();
    }
  };

  if (data) {
    return (
      <div
        className="AppBackground"
        style={{
          backgroundImage: "url(" + data[1] + ")",
          color: "#000",
          maxWidth: "100vw",
        }}
      >
        <div className="menu" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <span
            className="titleMenu"
            onClick={() => history.push({ pathname: "/" })}
          >
            Postgen
          </span>
        </div>
        <div
          className="App"
          style={{
            padding: "1em",
            paddingTop: "4em",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {alreadyRendered ? (
            <div className="downloadRenderedImage">
              <a href={finalImage} download={`postgen_${data.username}.jpg`}>
                <span>Baixar</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          <div
            className="renderImage"
            onClick={() => saveImage()}
          >
            <span>Renderizar</span>
          </div>
          <h1>Sucesso! ✅</h1>
          <div
            className="item"
            id="item"
            style={{
              // backgroundImage: `url(${data.imageLink})`,
              borderRadius: 0,
            }}
          >
            <img src={data.imageLink} style={{objectFit: 'cover'}} className="backgroundImageImg" />
            <div
              className="filter"
              style={{
                backgroundColor: data.darkBackground
                  ? "rgba(0, 0, 0, 0.50)"
                  : "transparent",
              }}
            >
              {data.text ? (
                <span
                  className="contentText"
                  style={{
                    color: data.textColor,
                    textShadow: data.shadows
                      ? "0 0.3em 0.5em rgba(0, 0, 0, 0.75)"
                      : "none",
                  }}
                >
                  {data.text}
                </span>
              ) : (
                <></>
              )}

              {/* {data.logo ? (
                <div
                  className="logoRender"
                  style={{
                    width: `${data.logoWidth}%`,
                    height: `${data.logoWidth}%`,
                    borderRadius: `${data.roundCorners}px`,
                    backgroundImage: `url(${data.logo})`,
                  }}
                />
              ) : (
                <></>
              )} */}
              {data.logo ? (
                <div
                style={{
                  width: `${data.logoWidth}%`,
                  borderRadius: `${data.roundCorners}px`,
                  overflow: 'hidden'
                }}
                >
                <img
                  src={data.logo}
                  className="logo"
                  style={{
                    // width: `${data.logoWidth}%`,
                    // borderRadius: `${data.roundCorners}px`,
                  }}
                />  
                </div>
              ) : (
                <></>
              )}
              <img
                src={`${data.imageLink}`}
                style={{ display: "none" }}
                onLoad={() => stopLoad()}
              />
              {data.username ? (
                <span className="username">{data.username}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <h1>Dados da imagem:</h1>
          <span>
            Conteúdo: {data.text ? `"${data.text}"` : "Nenhum texto adicionado"}
          </span>{" "}
          <br />
          <span>Imagem de fundo: {data.imageLink}</span> <br />
          <span>
            Username:{" "}
            {data[2] ? `"${data.username}"` : "Nenhum texto adicionado"}
          </span>{" "}
          <br />
          <span>
            Cor do texto: {data.textColor ? data.textColor : "#fff"}
          </span>{" "}
          <br />
          <span>
            Sombras: {data.shadow === true ? "Ativadas" : "Desativadas"}
          </span>{" "}
          <br />
          <span>
            Logo:{" "}
            {data.logo.length ? `"${data.logo}"` : "Nenhuma imagem adicionada"}
          </span>
          <br />
          <span>Tamanho da logo: {data.logoWidth}%</span>
          <br />
          <span>Suavidez das bordas da logo: {data.roundCorners}%</span> <br />
          <span>
            Possui fundo escuro: {data.darkBackground === true ? "Sim" : "Não"}
          </span>{" "}
          <br />
          <br />
          <br />
          <br />
          <div
            className="loadingView"
            style={{ opacity: loading.opacity, display: loading.display }}
          >
            <h1>Carregando...</h1>
            <Loader type="TailSpin" height={40} width={40} color="#fff" />
          </div>
        </div>
                
        <ToastContainer/>
      </div>
    );
  } else {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("https://picsum.photos/1080/1080")',
          margin: 0,
          padding: 0,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="App"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
          }}
        >
          <h1>Esta página expirou :(</h1>
          <span
            className="titleMenu"
            style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "17pt" }}
            onClick={() => history.push({ pathname: "/" })}
          >
            Postgen
          </span>
        </div>
      </div>
    );
  }
}
