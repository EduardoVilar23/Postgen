import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useHistory, useLocation } from "react-router-dom";
import "../App.css";

export default function ReadyImage() {
  const { data } = useLocation();
  const [loading, setLoading] = useState({ opacity: 1, display: "flex" });

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
          <h1>Sucesso! ✅</h1>
          <div
            className="item"
            style={{
              backgroundImage: "url(" + data[1] + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              borderRadius: "0.3em",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: data[8]
                  ? "rgba(0, 0, 0, 0.50)"
                  : "transparent",
                transition: "200ms",
              }}
            >
              <img
                src={data[1]}
                onLoad={() => stopLoad()}
                style={{ display: "none" }}
              />
              <span
                style={{
                  margin: "3em",
                  fontSize: 28,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: data[3] ? data[3] : "#fff",
                  textShadow: data[4]
                    ? "0 0.3em 0.5em rgba(0, 0, 0, 0.75)"
                    : "none",
                }}
              >
                {data[0]}
              </span>
              {data[2] ? (
                <span
                  className="username"
                  style={{
                    position: "absolute",
                    padding: "0.5em",
                    bottom: "1em",
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    borderRadius: "0.5em",
                    zIndex: 7,
                    color: "#fff",
                  }}
                >
                  {data[2]}
                </span>
              ) : (
                <></>
              )}
              {data[5] ? (
                <img
                  alt={data[5] ? "logo" : ""}
                  style={{
                    width: `${data[6]}%`,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    padding: 10,
                    borderRadius: `${data[7]}px`,
                  }}
                  src={data[5]}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <h1>Dados da imagem:</h1>
          <span>
            Conteúdo: {data[0] ? `"${data[0]}"` : "Nenhum texto adicionado"}
          </span>{" "}
          <br />
          <span>Imagem de fundo: {data[1]}</span> <br />
          <span>
            Username: {data[2] ? `"${data[2]}"` : "Nenhum texto adicionado"}
          </span>{" "}
          <br />
          <span>Cor do texto: {data[3] ? data[3] : "#fff"}</span> <br />
          <span>
            Sombras: {data[4] === true ? "Ativadas" : "Desativadas"}
          </span>{" "}
          <br />
          <span>
            Logo:{" "}
            {data[5].length ? `"${data[5]}"` : "Nenhuma imagem adicionada"}
          </span>
          <br />
          <span>Tamanho da logo: {data[6]}%</span>
          <br />
          <span>Suavidez das bordas da logo: {data[7]}%</span> <br />
          <span>
            Possui fundo escuro: {data[8] === true ? "Sim" : "Não"}
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
