import { BookOpen, Download, FileText, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";

export default function ResourcesHubPage() {
  const resources = [
    {
      title: "Complete Puppy Care Guide (India)",
      desc: "A 25-page comprehensive guide covering potty training, initial vaccinations, and socialization specific to Indian environments.",
      icon: BookOpen,
      category: "Dogs"
    },
    {
      title: "Dog Food Comparison Chart 2026",
      desc: "A detailed matrix comparing Royal Canin, Farmina N&D, Drools, and Orijen based on protein source, grain content, and price.",
      icon: FileText,
      category: "Nutrition"
    },
    {
      title: "First-Time Cat Owner Checklist",
      desc: "Everything you need to buy and prepare before bringing a kitten into an Indian apartment.",
      icon: BookOpen,
      category: "Cats"
    },
    {
      title: "Vaccination Schedule (India)",
      desc: "Printable age-by-age vaccination and deworming schedule for both dogs and cats, formatted for Indian veterinary protocols.",
      icon: Activity,
      category: "Health"
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <BreadcrumbNav items={[{ label: "Resources", href: "/resources" }]} />
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Pet Care Resource Library</h1>
          <p className="text-lg text-foreground/70">Expert-curated guides, checklists, and charts for pet parents in India. Free to download.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <res.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{res.category}</div>
                  <h3 className="text-xl font-bold font-heading mb-2">{res.title}</h3>
                  <p className="text-sm text-foreground/70 mb-6">{res.desc}</p>
                  <Button variant="secondary" className="gap-2" asChild>
                    <a href={`https://wa.me/919557208775?text=Hi, please send me the ${res.title} PDF.`}>
                      <Download className="h-4 w-4" /> Get via WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
