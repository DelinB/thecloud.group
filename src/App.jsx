import React from 'react';
import { ThemeProvider, AppShell } from './components/shared';
import AIIntegrationPage from './pages/AIIntegrationPage';
import InsightsPage from './pages/InsightsPage';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  return (
    <ThemeProvider>
      <AppShell>
        {path === '/insights' ? <InsightsPage /> : <AIIntegrationPage />}
      </AppShell>
    </ThemeProvider>
  );
}
