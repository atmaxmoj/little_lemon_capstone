import {Link} from 'react-router-dom';

export default function SpecialCard({card}) {
  return (
      <article className="menu-card">
        <img src={card.image} alt="Special Menu"></img>
        <section className="menu-card-content">
          <h1>{card.name}</h1>
          <h3>{card.price}</h3>
          <p>{card.description}</p>
          <Link className="special-button" to="/order">Order for Delivery</Link>
        </section>
      </article>
  );
}