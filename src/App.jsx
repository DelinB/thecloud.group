import React from 'react';
import { ThemeProvider, AppShell } from './components/shared';

import HomePage from './pages/HomePage';
import AIIntegrationPage from './pages/AIIntegrationPage';
import InsightsPage from './pages/InsightsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import TechConsultingPage from './pages/TechConsultingPage';
import CybersecurityPage from './pages/CybersecurityPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const rawPath = window.location.pathname.replace(/\/+$/, '');
  const path = rawPath || '/';

  // /insights/article/:slug  →  ArticleDetailPage
  const articleMatch = path.match(/^\/insights\/([^/]+)$/);
  const articleSlug = articleMatch ? articleMatch[1] : null;

  let page = <HomePage />;

  if (path === '/insights') {
    page = <InsightsPage />;
  } else if (articleSlug && articleSlug !== 'article') {
    page = <ArticleDetailPage slug={articleSlug} />;
  } else if (path === '/ai-integration') {
    page = <AIIntegrationPage />;
  } else if (path === '/custom-software') {
    page = <CustomSoftwarePage />;
  } else if (path === '/tech-consulting') {
    page = <TechConsultingPage />;
  } else if (path === '/cybersecurity') {
    page = <CybersecurityPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  }

  return (
    <ThemeProvider>
      <AppShell>{page}</AppShell>
    </ThemeProvider>
  );
}