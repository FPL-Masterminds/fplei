import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { getUserSession } from "@/lib/auth";

export default async function PrivacyPolicyPage() {
  const userSession = await getUserSession();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <PageHeader 
            title="Privacy Policy" 
            description="How we handle your data and protect your privacy."
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Last updated: May 15, 2023
            </p>
            
            <p>
              At FPL Elite Insights, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our subscription service.
            </p>
            
            <h2>Information We Collect</h2>
            
            <p>
              We collect information that you provide directly to us when you:
            </p>
            
            <ul>
              <li>Register for an account</li>
              <li>Subscribe to our premium service</li>
              <li>Contact us for support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            
            <p>
              This information may include:
            </p>
            
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Payment information (processed securely via Stripe)</li>
              <li>Usage data and preferences</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            
            <p>
              We use the information we collect to:
            </p>
            
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments and questions</li>
              <li>Provide customer support</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
            
            <h2>Data Security</h2>
            
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>Third-Party Services</h2>
            
            <p>
              We use Stripe for payment processing. When you subscribe, you provide your payment information directly to Stripe, which operates under their own privacy policy. We do not store your full credit card details on our servers.
            </p>
            
            <h2>Data Retention</h2>
            
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            
            <h2>Your Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us at privacy@fpleliteinsights.com.
            </p>
            
            <h2>Changes to This Policy</h2>
            
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <p>
              privacy@fpleliteinsights.com
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}