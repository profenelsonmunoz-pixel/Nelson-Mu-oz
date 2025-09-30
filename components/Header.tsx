
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-cyan-600 text-white pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90"></div>
      <div className="absolute inset-0 bg-no-repeat bg-bottom" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'rgba(255,255,255,0.1)\' fill-opacity=\'1\' d=\'M0,224L48,229.3C96,235,192,245,288,250.7C384,256,480,256,576,234.7C672,213,768,171,864,138.7C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="bg-white rounded-full p-2 shadow-lg mr-4">
              <div className="bg-blue-800 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center leading-tight">
                <span className="text-xs font-bold tracking-tighter">NUESTRA SEÑORA</span>
                <span className="text-sm font-semibold">DE LA</span>
                <span className="text-xs font-bold tracking-tighter">CANDELARIA</span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Participa</h1>
              <p className="text-blue-200">I.E. Nuestra Señora de la Candelaria</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
