import React from "react";
import "../App.css";
import { useLocation } from "react-router-dom";

export default function ReadyImage() {
  const { data } = useLocation();
  return (
    <div style={{ padding: "2em" }}>
      <div
        className="item"
        style={{
          backgroundImage: "url(" + data[1] + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderRadius: 0,
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
            backgroundColor: data[8] ? "rgba(0, 0, 0, 0.50)" : "transparent",
            transition: "200ms",
          }}
        >
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
    </div>
  );
}
