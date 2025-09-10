// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center items-center space-x-2 mb-8">
          <svg className="h-16 w-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <h1 className="text-4xl font-bold text-foreground">FinanceTracker</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-8">
          Take control of your financial future with our comprehensive money management platform.
        </p>
        <div className="space-y-4">
          <a 
            href="/login" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground bg-gradient-primary rounded-xl shadow-lg hover:opacity-90 transition-smooth"
          >
            Get Started
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="p-4 rounded-lg bg-card shadow-md">
              <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Track Expenses</h3>
              <p className="text-sm text-muted-foreground">Monitor your spending habits</p>
            </div>
            <div className="p-4 rounded-lg bg-card shadow-md">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2 1 1 0 000-2zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Smart Analytics</h3>
              <p className="text-sm text-muted-foreground">Get insights into your finances</p>
            </div>
            <div className="p-4 rounded-lg bg-card shadow-md">
              <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Save Smart</h3>
              <p className="text-sm text-muted-foreground">Plan for your financial goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
