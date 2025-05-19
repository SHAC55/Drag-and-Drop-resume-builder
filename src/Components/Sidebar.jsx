import React from 'react';

const elements = [
  { type: 'text', label: 'Text' },
  { type: 'button', label: 'Button' },
  { type: 'image', label: 'Image' },
];

const Sidebar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('elementType', type);
  };

  return (
    <div className=" h-screen bg-white border-r px-4 py-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">🧩 Components</h2>
      {elements.map((el) => (
        <div
          key={el.type}
          draggable
          onDragStart={(e) => handleDragStart(e, el.type)}
          className="cursor-move px-4 py-2 mb-3 bg-gray-100 hover:bg-gray-200 text-sm font-medium rounded-lg shadow transition-all"
        >
          ➕ Add {el.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
