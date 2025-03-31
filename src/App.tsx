
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Capability from "./pages/Capability";
import Leadership from "./pages/Leadership";
import Mile from "./pages/Mile";
import Carve from "./pages/Carve";
import Datanix from "./pages/Datanix";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capability" element={<Capability />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/mile" element={<Mile />} />
          <Route path="/carve" element={<Carve />} />
          <Route path="/datanix" element={<Datanix />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
