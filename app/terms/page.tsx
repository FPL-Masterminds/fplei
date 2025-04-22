import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { getUserSession } from "@/lib/auth";

export default async function TermsPage() {
  const userSession = await getUserSession();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <PageHeader 
            title="Terms and Conditions" 
            description="Please read these terms carefully before using our service."
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Last updated: May 15, 2023
            </p>
            
            <h2>1. Introduction</h2>
            
            <p>
              These Terms and Conditions ("Terms") govern your use of FPL Elite Insights (the "Service") operated by FPL Elite Insights Ltd ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you do not have permission to access the Service.
            </p>
            
            <h2>2. Subscriptions</h2>
            
            <p>
              FPL Elite Insights offers a subscription-based service providing premium Fantasy Premier League insights and analysis.
            </p>
            
            <h3>2.1 Subscription Fees</h3>
            
            <p>
              The subscription fee is £4.99 per month, billed monthly. We reserve the right to change our subscription fees upon reasonable notice. Any changes to subscription fees will not apply to the current billing cycle but will take effect on the next billing date.
            </p>
            
            <h3>2.2 Payment</h3>
            
            <p>
              Payments are processed securely through Stripe. By subscribing, you authorize us to charge your payment method for the subscription fee on a recurring basis until you cancel your subscription.
            </p>
            
            <h3>2.3 Cancellation</h3>
            
            <p>
              You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to premium content until the end of your current billing period. No refunds will be issued for partial subscription periods.
            </p>
            
            <h2>3. User Accounts</h2>
            
            <p>
              To access certain features of the Service, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2>4. Intellectual Property</h2>
            
            <p>
              All content provided through the Service, including but not limited to text, graphics, logos, analysis, and recommendations, is owned by FPL Elite Insights and protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>5. Prohibited Uses</h2>
            
            <p>
              You may not:
            </p>
            
            <ul>
              <li>Use the Service for any illegal purpose</li>
              <li>Share your account credentials with others</li>
              <li>Redistribute or resell content from the Service</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service to scrape, crawl, or spider any content</li>
            </ul>
            
            <h2>6. Disclaimer of Warranties</h2>
            
            <p>
              The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Service will always be available, uninterrupted, or error-free.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service, including but not limited to loss of profits, data, or goodwill.
            </p>
            
            <h2>8. Governing Law</h2>
            
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
            </p>
            
            <h2>9. Changes to Terms</h2>
            
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on the Service and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2>10. Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p>
              legal@fpleliteinsights.com
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}