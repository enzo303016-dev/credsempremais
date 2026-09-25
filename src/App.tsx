/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SimulatorSection } from './components/SimulatorSection';
import { SecuritySection } from './components/SecuritySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickContactModal } from './components/QuickContactModal';
import { PRODUCTS } from './data/creditData';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [quickContactOpen, setQuickContactOpen] = useState<boolean>(false);

  const scrollToSimulator = (productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    const simulatorElement = document.getElementById('simulacao');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    const simulatorElement = document.getElementById('simulacao');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/60 text-slate-900 selection:bg-[#0c2f7c] selection:text-white overflow-x-hidden w-full">
      {/* Top Navbar */}
      <Navbar
        onOpenQuickChat={() => setQuickContactOpen(true)}
        onNavigateToSimulator={scrollToSimulator}
      />

      <main className="flex-1">
        {/* Hero Section with WhatsApp conversation mockup */}
        <HeroSection
          onSimulateClick={() => scrollToSimulator()}
          onOpenQuickChat={() => setQuickContactOpen(true)}
        />

        {/* Products Section */}
        <ProductsSection onSelectProductForSim={handleSelectProduct} />

        {/* How it Works Section */}
        <HowItWorksSection onSimulateClick={() => scrollToSimulator()} />

        {/* Interactive Simulator Section */}
        <SimulatorSection
          selectedProductId={selectedProductId}
          onProductChange={(id) => setSelectedProductId(id)}
        />

        {/* Security & Anti-Fraud Section */}
        <SecuritySection />

        {/* Customer Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Banner */}
        <CtaSection onSimulateClick={() => scrollToSimulator()} />
      </main>

      {/* Footer */}
      <Footer
        onSelectProduct={handleSelectProduct}
        onSimulateClick={() => scrollToSimulator()}
      />

      {/* Floating Interactive WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Quick Contact Modal */}
      <QuickContactModal
        isOpen={quickContactOpen}
        onClose={() => setQuickContactOpen(false)}
      />
    </div>
  );
}
