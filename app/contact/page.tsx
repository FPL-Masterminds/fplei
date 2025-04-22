import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { getUserSession } from "@/lib/auth";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default async function ContactPage() {
  const userSession = await getUserSession();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <PageHeader 
            title="Contact Us" 
            description="Get in touch with our team for support or inquiries."
          />
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                Our support team typically responds within 24 hours.
              </p>
              <a href="mailto:support@fpleliteinsights.com" className="text-primary hover:underline mt-2">
                support@fpleliteinsights.com
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Available Monday to Friday, 9am to 5pm GMT.
              </p>
              <button className="text-primary hover:underline mt-2">
                Start a conversation
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Based in London, United Kingdom.
              </p>
              <p className="text-primary mt-2">
                Remote team worldwide
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}