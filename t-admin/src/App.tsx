import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    if (token && user) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem('adminToken', 'authenticated');
    localStorage.setItem('adminUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" richColors />
        <AnimatedGradientBackground />
        <div className="relative h-screen overflow-auto">
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  isAuthenticated ? 
                    <Dashboard currentUser={currentUser} onLogout={handleLogout} /> : 
                    <LoginPage onLogin={handleLogin} />
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? 
                    <Dashboard currentUser={currentUser} onLogout={handleLogout} /> : 
                    <LoginPage onLogin={handleLogin} />
                } 
              />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
