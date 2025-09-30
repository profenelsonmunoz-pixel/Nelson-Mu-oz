import React from 'react';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import Accordion from './components/Accordion';
import { CONTACT_METHODS, MINTIC_MECHANISMS, OTHER_MECHANISMS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-24">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-4">
              ¿Cómo se puede participar?
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
            <p className="text-slate-500 max-w-3xl mx-auto mt-6">
              La institución educativa Nuestra Señora de la Candelaria cuenta con los siguientes mecanismos para que la comunidad pueda participar activamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {CONTACT_METHODS.map((method) => (
              <ContactCard
                key={method.title}
                icon={method.icon}
                title={method.title}
                details={method.details}
              />
            ))}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6 text-center">
                Mecanismos de participación Ciudadana en MinTIC
              </h3>
              <Accordion mechanisms={MINTIC_MECHANISMS} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6 text-center">
                Otros Mecanismos de Participación
              </h3>
              <Accordion mechanisms={OTHER_MECHANISMS} />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-slate-500">
        <p>&copy; {new Date().getFullYear()} Institución Educativa Nuestra Señora de la Candelaria.</p>
        <p>Candelaria - Valle del Cauca, Colombia.</p>
      </footer>
    </div>
  );
};

export default App;