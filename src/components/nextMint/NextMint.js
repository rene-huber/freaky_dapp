import "../../global.css";

function NextMint() {
  const handleClick = () => {
    window.open("https://rene-huber.eu/contact", "_blank");
  };

  return (
    <>
      <div onClick={handleClick} className="nextMint" />
      <div className="texNext">
        Launch Announcement:  date and time here in the website and social
        media channels. Maybe using email newsletters or paid ads to reach a
        wider audience or not, idk.
      </div>
    </>
  );
}

export default NextMint;
