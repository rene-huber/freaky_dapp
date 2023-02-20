import "../../global.css";

function NextMint() {
  const handleClick = () => {
    window.open("https://rene-huber.eu/contact", "_blank");
  };

  return (
   
      <div onClick={handleClick} className="nextMint" />
     
    
  );
}

export default NextMint;
