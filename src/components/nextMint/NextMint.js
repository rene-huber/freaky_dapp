import "../../global.css";

function NextMint() {
  const handleClick = () => {
    window.open("https://rene-huber.eu/contact", "_blank");
  };

  return (
    <>
      <div onClick={handleClick} className="nextMint" />
      <div className="texNext">
        Launch Announcement:  date and time on your website and social
        media channels. Consider using email newsletters or paid ads to reach a
        wider audience.
      </div>
    </>
  );
}

export default NextMint;
