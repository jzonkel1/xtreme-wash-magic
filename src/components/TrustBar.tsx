const items = [
  "5+ YEARS EXPERIENCE",
  "FULLY INSURED",
  "INDUSTRIAL · COMMERCIAL · RESIDENTIAL",
  "BIODEGRADABLE CHEMICALS",
  "FREE ON-SITE QUOTES",
  "CORPUS CHRISTI · MCALLEN · SAN ANTONIO",
];

const TrustBar = () => (
  <section className="bg-xk-blue py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="font-heading font-bold text-primary-foreground text-xs md:text-sm tracking-wide">
            {item}
            {i < items.length - 1 && (
              <span className="ml-4 text-primary-foreground/50 hidden md:inline">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
