import code from "../../img/code-bar.gif";
import ps5 from "../../img/4ICONS.gif";

function BarraNegra() {
  return (
    <div className="barraNegra">
      <div className="codeBar box">
        <img src={code} alt={""} />
      </div>
      <div className="box textoP">
        <p>
          Step right up, folks, to the freaky NFT marketplace! A place where the
          weird and wonderful collide, and creativity knows no bounds. Gone are
          the days of boring and mundane digital assets. Our marketplace is
          where you can find NFTs that are out of this world, and truly
          one-of-a-kind. From surreal animations to otherworldly illustrations,
          to collectibles that defy description, you're sure to find something
          that speaks to your inner freak.
        </p>
      </div>
      <div className="ps5 box">
        <img src={ps5} alt={""} />
      </div>
    </div>
  );
}

export default BarraNegra;
