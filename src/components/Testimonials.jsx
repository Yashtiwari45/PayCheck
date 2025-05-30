import TestimonialCard from "./TestimonialCard";

const Testimonials = () => (
  <div className="mt-24">
    <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard
        quote="MonsterScale transformed our business. We've seen 300% growth since implementing their solutions!"
        name="Sarah Johnson"
        title="CEO, TechInnovate"
        image="/placeholder.svg"
      />
      <TestimonialCard
        quote="The analytics tools are a game-changer. We now make data-driven decisions with confidence."
        name="Michael Chen"
        title="CTO, DataDriven Co."
        image="/placeholder.svg"
      />
      <TestimonialCard
        quote="Outstanding support team. They're always there when we need them, ensuring smooth scaling."
        name="Emily Rodriguez"
        title="Operations Manager, ScaleUp Inc."
        image="/placeholder.svg"
      />
    </div>
  </div>
);

export default Testimonials;
