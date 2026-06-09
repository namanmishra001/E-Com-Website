/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { About } from './components/About';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDFCFA] text-stone-900">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col pt-28">
        <Hero />
        <About />
        <ProductCatalog />
        <ContactMap />
      </main>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
