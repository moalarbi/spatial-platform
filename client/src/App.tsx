import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Technology from "./pages/Technology";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BookDemo from "./pages/BookDemo";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1EA]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/services" component={() => <Layout><Services /></Layout>} />
      <Route path="/industries" component={() => <Layout><Industries /></Layout>} />
      <Route path="/technology" component={() => <Layout><Technology /></Layout>} />
      <Route path="/gallery" component={() => <Layout><Gallery /></Layout>} />
      <Route path="/pricing" component={() => <Layout><Pricing /></Layout>} />
      <Route path="/case-studies" component={() => <Layout><CaseStudies /></Layout>} />
      <Route path="/contact" component={() => <Layout><Contact /></Layout>} />
      <Route path="/faq" component={() => <Layout><FAQ /></Layout>} />
      <Route path="/book-demo" component={() => <Layout><BookDemo /></Layout>} />
      <Route path="/careers" component={() => <Layout><Careers /></Layout>} />
      <Route path="/terms" component={() => <Layout><Terms /></Layout>} />
      <Route path="/privacy" component={() => <Layout><Privacy /></Layout>} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
