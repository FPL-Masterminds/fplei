import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Analytics Pro?",
    answer: "Analytics Pro is a comprehensive data analytics platform that helps businesses make better decisions through advanced data visualization and analysis tools."
  },
  {
    question: "How does pricing work?",
    answer: "We offer three tiers: Starter, Pro, and Enterprise. Each tier includes different features and capabilities to match your needs. All plans are billed monthly with no long-term commitment required."
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! We offer a 14-day free trial on all our plans. No credit card required to start your trial."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide email support for all plans, with priority support and dedicated account managers available for Pro and Enterprise customers respectively."
  },
  {
    question: "Is there a limit to data storage?",
    answer: "The Starter plan includes up to 1,000 data points. Pro and Enterprise plans come with unlimited data storage."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#2E0032]">
            Frequently Asked 
            <span className="text-[#00FF87]"> Questions</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}