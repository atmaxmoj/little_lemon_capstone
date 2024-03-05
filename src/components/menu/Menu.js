import HeroImage from "../../assets/restauranfood.jpg";

export default function Menu() {
  return (
      <header className="reserve-table">
        <img
            className="header-reserve"
            src={HeroImage}
            alt="Little Lemon Ingredients"
        ></img>
        <div className="reserve-header-text">
          <h1>Menu</h1>
        </div>
      </header>
  );
}
