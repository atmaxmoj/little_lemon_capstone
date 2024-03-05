
export default function TestimonialCard(card) {
  return (
      <article className="testimonial-card">
        <h3>{card.name}</h3>
        <p>{card.description}</p>
      </article>
  );
}