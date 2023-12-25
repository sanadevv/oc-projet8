import image from "../assets/IMG.png";
function HomeBanner() {
  return (
    <div className="kasa-banner">
      <img src={image} alt="montagne" />
      <div className="banner-div"></div>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}
export default HomeBanner;
