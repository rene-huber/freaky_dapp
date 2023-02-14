import "../../global.css";
import white from "./whitelist.png";

function NextMint() {
  return (
    <div className="nextMint">
      <div className="white">
        <p>
          Get ready the next collection is incoming! you'll be able to ride in
          style like never before. Don't miss out on this chance to add a rare
          and exclusive piece (ChatGTP).
        </p>
        <div className="logoWhite">
        <a href="http://" target="_blank" rel="noopener noreferrer" >
          <img src={white} alt={"white list"}  />
        </a></div>
      </div>
      <div className="extraTexto"> 
      Get ready the next collection is incoming! you'll be able to ride in
      like never before. Don't miss out on this chance to add a rare
          and exclusive piece Art (ChatGTP).
        </div>
    </div>
  );
}

export default NextMint;
