import TestimonialFillers from './filler/testimonials.json'

export default function Testimonials() {
  return (
      <section className="testimonials">
        <article className="testimonials-topbar">
          <h1>Testimonials</h1>
        </article>
        <section className="testimonials-cards">
          {TestimonialFillers.map((prop) => (
              <TestimonialCard card={prop}/>
          ))}
        </section>
      </section>
  );
}

function TestimonialCard({card}) {
  return (
      <article className="testimonial-card">
        <h3>{card.name}</h3>
        <p>{card.description}</p>
      </article>
  );
}