import "../global.css"
import openSea from "../img/openSeaGREEN.png"
import polygon from "../img/polygonScan.png"

function Opensea() {
  return (
   <div className="opensea">
    <div className="open"><a href="https://opensea.io/collection/freakynft" target={"_blank"}>
 <img src={openSea} alt={"open sea"} /></a>
    </div>
    <div className="polygon">
     <a href="https://polygonscan.com/address/0x893bc437490010efd91ea875ec48038d8f88faf5" target={"_blank"}><img src={polygon} alt="polygon Scan" /> </a>
    </div>
   </div>
  )
}

export default Opensea