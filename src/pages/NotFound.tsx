import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="bg-primary rounded-full p-2">
            <svg className="h-8 w-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground">404</h1>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-gradient-primary rounded-xl shadow-lg hover:opacity-90 transition-smooth"
          >
            Go Home
          </a>
          <a 
            href="/dashboard" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-secondary rounded-xl shadow-md hover:bg-secondary/80 transition-smooth"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
