import React from 'react';
import Sidebar from './Components/Sidebar';
import Canvas from './Components/Canvas';
import PropertiesPanel from './Components/PropertiesPanel';

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full font-sans bg-gray-100 text-gray-800">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 p-4 bg-white border-b lg:border-b-0 lg:border-r shadow-md flex flex-col gap-4">
        <Sidebar />
      </aside>

      {/* Canvas Area */}
      <main className="flex-1 flex justify-center items-center p-4 bg-gray-100 overflow-auto">
        <div className="w-full max-w-[850px] h-[600px] bg-white shadow-xl rounded-2xl overflow-auto border-2 border-dashed border-gray-300 transition-all duration-300">
          <Canvas />
        </div>
      </main>

      {/* Properties Panel */}
      <aside className="w-full lg:w-1/5 p-4 bg-white border-t lg:border-t-0 lg:border-l shadow-md">
        <PropertiesPanel />
      </aside>
    </div>
  );
}

export default App;
