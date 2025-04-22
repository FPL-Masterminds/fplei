import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { SignUpForm } from "./signup-form";
import { PageHeader } from "@/components/ui/page-header";
import { requireUnauth } from "@/lib/auth";

export default async function SignUpPage() {
  // Redirect to dashboard if already logged in
  await requireUnauth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container max-w-md mx-auto py-10">
        <div className="space-y-6">
          <PageHeader 
            title="Sign Up" 
            description="Create an account to get started with FPL Elite Insights."
          />
          
          <SignUpForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}