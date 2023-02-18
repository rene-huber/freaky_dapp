import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import "../global.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Mint() {
  const dispatch = useDispatch();

  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="cuadroMint">



<div className="polygon">
          <h2 style={{ fontSize: "11px" }}>Your wallet: {blockchain.account}</h2>
        </div>

      <h2 style={{ color:"#FFF"}} className="costOne">{data.totalSupply} / {CONFIG.MAX_SUPPLY}
      </h2>

      

      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <>
          <h2 style={{ textAlign: "center" }}>The sale has ended.</h2>
          <p style={{ textAlign: "center" }}>
            You can still find {CONFIG.NFT_NAME} on
          </p>

          <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
            {CONFIG.MARKETPLACE}
          </a>
        </>
      ) : (
        <>
          <h2 className="costOne">
            1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
            {CONFIG.NETWORK.SYMBOL}.
          </h2>

          <p style={{ textAlign: "center" }}>Excluding gas fees.</p>

          {blockchain.account === "" || blockchain.smartContract === null ? (
            <div>
              <p>Connect to the {CONFIG.NETWORK.NAME} network</p>

              <button
                className="botonMint"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              >
                CONNECT / METAMASK
              </button>
              {blockchain.errorMsg !== "" ? (
                <>
                  <p>{blockchain.errorMsg}</p>
                </>
              ) : null}
            </div>
          ) : (
            <>
              <p>{feedback}</p>

              <div>
                <button
                  style={{ lineHeight: 0.4 }}
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    decrementMintAmount();
                  }}
                >
                  -
                </button>

                <h2>{mintAmount}</h2>

                <button
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    incrementMintAmount();
                  }}
                >
                  +
                </button>
              </div>

              <div>
                <button className="botonMint"
                  disabled={claimingNft ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    claimNFTs();
                    getData();
                  }}
                >
                  {claimingNft ? "BUSY" : "BUY"}
                </button>
              </div>
            </>
          )}
        </>
      )}

      {/* <div>

        
<p style={{ fontSize: "9px", textAlign:"center" }}>  Please make sure you are connected to the right network <span style={{color:"#F90"}}>
  
{CONFIG.NETWORK.NAME} Mainnet</span> and the correct address. Please note:
            Once you make the purchase, you cannot undo this action.</p>
        <p style={{ fontSize: "9px", textAlign:"center" }}>
          Gas limit to <span style={{color:"#F90"}}>{CONFIG.GAS_LIMIT}</span> for the contract to successfully mint
          your NFT. We recommend that you don't lower the gas limit.
        </p>
      </div> */}
    </div>
  );
}

export default Mint;
