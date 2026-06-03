import { ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function FAQsPage() {
  const faqCategories = [
    {
      title: "Dogs & Puppies",
      faqs: [
        { q: "Do you provide health guarantees for puppies?", a: "Yes, all our pets come with a 48-hour health guarantee and a certified vet check document to ensure you are taking home a healthy companion." },
        { q: "What vaccinations do the puppies have?", a: "All puppies come with age-appropriate vaccinations and a deworming schedule. You will receive a physical health booklet." },
        { q: "Can you help me choose the right breed?", a: "Absolutely! We highly recommend booking a free 15-minute consultation. Our experts will match you with the perfect breed based on your apartment size, family setup, and lifestyle in Dehradun." }
      ]
    },
    {
      title: "Store & Shipping",
      faqs: [
        { q: "Where are you located in Dehradun?", a: "We are located on Rajpur Road, Dehradun. Check our Contact page for the exact Google Maps location." },
        { q: "Do you deliver products outside Dehradun?", a: "We currently deliver premium supplies all across Uttarakhand. However, live pets require in-person pickup to ensure their safety and well-being." },
        { q: "What is your return policy?", a: "We accept returns on unopened pet food and unused accessories within 7 days of purchase. Live pets and medicines are non-refundable." }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-foreground/70">Find quick answers to your questions below, or reach out to us on WhatsApp.</p>
        </div>

        <div className="space-y-10">
          {faqCategories.map((cat, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold font-heading mb-6">{cat.title}</h2>
              <div className="space-y-4">
                {cat.faqs.map((faq, j) => (
                  <details key={j} className="group bg-white rounded-xl overflow-hidden border border-black/5 [&_summary::-webkit-details-marker]:hidden shadow-sm">
                    <summary className="flex items-center justify-between p-6 font-bold cursor-pointer text-lg">
                      {faq.q}
                      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-primary shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold font-heading mb-4">Still have questions?</h2>
          <p className="mb-6 text-white/80">We are always happy to help. Send us a message on WhatsApp for an instant reply.</p>
          <Button variant="whatsapp" className="w-full md:w-auto">Chat with Us Now</Button>
        </div>
      </section>
    </div>
  );
}
