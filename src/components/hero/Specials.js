import SpecialFillers from './filler/specials.json'
import SpecialCard from './card/SpecialCard';

export default function Specials() {
  return (
      <section className="specials">
        <article className="specials-topbar">
          <h1>This weeks specials</h1>
          <a className="action-button" href={"/menu"} target="_blank" rel="noreferrer">Online
            Menu</a>
        </article>

        <section className="specials-cards">
          {SpecialFillers.map((prop) => (
              <SpecialCard card={prop}/>
          ))}
        </section>
      </section>
  );
}