import { Phone, ClipboardList, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "GIVE US A CALL",
    desc: "Call or text 361-947-7811. Tell us about your property and what needs cleaning. We'll set up a convenient time to come take a look.",
  },
  {
    num: "2",
    icon: ClipboardList,
    title: "RECEIVE YOUR FREE QUOTE",
    desc: "We come to you for a free on-site assessment. No guessing, no hidden fees — just a clear, honest price before any work begins.",
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "SET A START DATE",
    desc: "Once you're happy with the quote, we schedule your clean and show up ready to work. Done right, done fast.",
  },
];

const HowItWorks = () => (
  <section className="bg-background py-20">
    <div className="container mx-auto px-4">
      <span className="font-heading text-xk-blue text-sm tracking-widest font-semibold block text-center mb-3">
        THE PROCESS
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground text-center mb-12">
        Getting Clean Has Never Been This Easy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((s) => (
          <div key={s.num} className="relative bg-background border border-border p-8 rounded-lg shadow-lg">
            <div className="absolute -top-4 left-6 bg-xk-blue text-primary-foreground font-heading font-bold w-9 h-9 rounded-full flex items-center justify-center text-lg">
              {s.num}
            </div>
            <s.icon className="w-10 h-10 text-xk-blue mb-4 mt-2" />
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-xk-blue rounded-lg py-6 px-8 text-center">
        <p className="text-primary-foreground font-heading text-lg md:text-xl mb-4">
          Ready to get started? It's that simple.
        </p>
        <a
          href="tel:3619477811"
          className="inline-block bg-xk-charcoal text-primary-foreground font-heading font-bold px-8 py-3 rounded hover:bg-xk-steel transition-colors"
        >
          CALL OR TEXT 361-947-7811
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
