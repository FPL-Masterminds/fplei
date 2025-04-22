import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { LoginForm } from "./login-form";
import { PageHeader } from "@/components/ui/page-header";
import { requireUnauth } from "@/lib/auth";

export default async function LoginPage() {
  // Redirect to dashboard if already logged in
  await requireUnauth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1 container max-w-md mx-auto py-10">
        <div className="space-y-6">
          <PageHeader 
            title="Login" 
            description="Welcome back! Login to access your FPL insights."
          />
          
          <LoginForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}