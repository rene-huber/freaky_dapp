import "../global.css"

function TresLogos() {
  return (
    <div className="tresLogosWrap">
           <div className="tresLogos">1</div>
    <div className="tresLogos">2</div>
    <div className="tresLogos">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
          alt="discord"
          height={"13px"}
          style={{
            color: "#FFF",
            position: "absolute",
            cursor: "pointer",
            zIndex: "99",
            paddingTop: "4px",
          }}
        />
      </a></div>
    </div>
  )
}

export default TresLogos