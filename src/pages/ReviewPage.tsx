import { useState } from "react";
import { Star, MessageSquareWarning, Phone, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { submitQuote } from "@/lib/netlifyForms";
import { business } from "@/data";
import crewPhoto from "@/assets/crew-thumbs-up.webp";

/**
 * Review gate — COMPLIANT BY CONSTRUCTION.
 *
 * Google's review policies and the FTC's rule on consumer reviews both prohibit
 * "review gating": screening customers by how happy they are and only steering
 * the happy ones to a public review. So this page never asks for a rating
 * first and never routes on one.
 *
 * Instead BOTH paths are shown to EVERY visitor, at equal prominence, at the
 * same time: leave a public Google review, or send private feedback to Eric.
 * The customer picks. Nothing is hidden, nothing is conditional.
 *
 * Do not "improve" this by adding a star-picker that decides which option to
 * show — that is precisely the illegal pattern this page exists to avoid.
 */
const ReviewPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", details: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.details.trim()) {
      toast.error("Please tell us what happened so we can fix it.");
      return;
    }
    setSubmitting(true);
    try {
      await submitQuote({ ...form, source: "Private Feedback (Review Page)" });
      setDone(true);
    } catch {
      toast.error(`Something went wrong. Please call or text ${business.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  // 16px on mobile or iOS Safari force-zooms the page on focus. See QuoteForm.
  const inputClass =
    "w-full bg-xk-light-gray/80 border border-xk-warm-white/15 text-xk-warm-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-xk-red focus:ring-1 focus:ring-xk-red font-body text-base md:text-sm placeholder:text-xk-warm-white/35";

  return (
    <>
      <Seo
        title="Leave a Review | Xtreme Kleen"
        description="Tell us how we did. Leave a public review on Google, or send private feedback straight to the owner."
        path="/review"
        noindex
      />
      <StickyHeader />

      <main className="relative bg-xk-charcoal pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden min-h-screen">
        {/* Photo band behind the headline only, faded to charcoal before the
            form starts — a full-bleed photo behind input fields is unreadable.
            The crew grinning after a plant job is the right note to ask for a
            review on: it's the moment the customer is being asked to remember. */}
        <div className="absolute inset-x-0 top-0 h-[420px] md:h-[520px]">
          <img
            src={crewPhoto}
            alt="The Xtreme Kleen crew after a heavy-equipment wash"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xk-charcoal/85 via-xk-charcoal/85 to-xk-charcoal" />
        </div>

        <div className="absolute inset-0 tex-grid opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 480px at 50% 0%, rgba(226,54,54,0.16), transparent 62%)",
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="font-heading text-xk-red text-sm tracking-widest font-semibold block mb-3">
              — HOW DID WE DO? —
            </span>
            <h1 className="font-display uppercase text-4xl md:text-6xl text-xk-warm-white mb-5 leading-[0.92] tracking-tight">
              Tell Us How We Did
            </h1>
            <p className="text-xk-warm-white/60 font-body leading-relaxed max-w-2xl mx-auto">
              We're a small crew and we read every word. If we got it right, a
              public review helps other people in the Coastal Bend find us. If we
              got it wrong, tell {business.owner.split(" ")[0]} directly and he'll
              make it right.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* Public review */}
            <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-xl p-7 md:p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-xk-red fill-xk-red" />
                ))}
              </div>
              <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white mb-3 tracking-tight">
                Happy With the Job?
              </h2>
              <p className="text-xk-warm-white/60 font-body text-sm leading-relaxed mb-7 flex-1">
                Leaving a review on Google takes about a minute, and it's the
                single biggest thing you can do to help a local business like ours.
                Say whatever you actually think — it's your review.
              </p>
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-xk-red text-xk-warm-white font-heading font-bold text-base px-6 py-4 rounded-lg hover:bg-xk-red-glow transition-all shadow-glow-red"
              >
                Leave a Google Review
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Private feedback */}
            <div className="bg-xk-steel/80 border border-xk-warm-white/10 rounded-xl p-7 md:p-8 h-full flex flex-col">
              {done ? (
                <div className="text-center py-8 my-auto">
                  <div className="w-16 h-16 rounded-full bg-xk-red/20 border-2 border-xk-red flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-xk-red" />
                  </div>
                  <h2 className="font-display uppercase text-2xl text-xk-warm-white mb-2 tracking-tight">
                    Message Sent
                  </h2>
                  <p className="text-xk-warm-white/60 font-body text-sm mb-6">
                    Thanks for telling us. {business.owner} will reach out
                    personally — usually the same day.
                  </p>
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 text-xk-red hover:text-xk-red-glow font-heading font-bold text-sm"
                  >
                    <Phone className="w-4 h-4" /> Or call {business.phone}
                  </a>
                </div>
              ) : (
                <>
                  <MessageSquareWarning className="w-8 h-8 text-xk-red mb-4" />
                  <h2 className="font-display uppercase text-2xl md:text-3xl text-xk-warm-white mb-3 tracking-tight">
                    Something Not Right?
                  </h2>
                  <p className="text-xk-warm-white/60 font-body text-sm leading-relaxed mb-6">
                    Send it straight to the owner. This goes to {business.owner},
                    not a support queue — and we'd rather fix it than have you
                    live with it.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      maxLength={100}
                      autoComplete="name"
                    />
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="Phone (optional — so we can follow up)"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      maxLength={20}
                      autoComplete="tel"
                    />
                    <textarea
                      placeholder="What happened? *"
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className={`${inputClass} min-h-[120px] resize-none flex-1`}
                      maxLength={1500}
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-transparent border border-xk-warm-white/25 text-xk-warm-white font-heading font-bold text-base py-4 rounded-lg hover:border-xk-red hover:bg-xk-red/10 transition-all disabled:opacity-60"
                    >
                      {submitting ? "SENDING..." : "SEND PRIVATE FEEDBACK"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* The disclosure that makes this a gate-free page, not a review gate. */}
          <p className="text-center text-xk-warm-white/40 font-body text-xs leading-relaxed max-w-2xl mx-auto mt-12">
            Both options are offered to every customer, every time. We don't screen
            anyone out of leaving a public review based on what they'd say, and we
            never offer anything in exchange for one. Reviews on Google are yours
            to write, positive or not.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ReviewPage;
