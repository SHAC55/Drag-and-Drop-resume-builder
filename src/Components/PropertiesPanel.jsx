import React from 'react';
import { useBuilder } from '../Hooks/useBuilder';

const PropertiesPanel = () => {
  const { selectedElementIndex, elements, updateElementProps } = useBuilder();

  if (selectedElementIndex === null) {
    return (
      <div className=" h-screen bg-white border-l px-4 py-6 shadow-sm">
        <p className="text-gray-500">Select an element to edit its properties.</p>
      </div>
    );
  }

  const element = elements[selectedElementIndex];

  return (
    <div className="h-screen bg-white border-l px-4 py-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">⚙️ Properties</h2>

      {element.type !== 'image' ? (
        <>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
          <input
            type="text"
            value={element.props.text}
            onChange={(e) =>
              updateElementProps(selectedElementIndex, { text: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </>
      ) : (
        <>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            value={element.props.src || ''}
            onChange={(e) =>
              updateElementProps(selectedElementIndex, { src: e.target.value })
            }
            className="w-fit px-3 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/image.png"
          />
        </>
      )}
    </div>
  );
};

export default PropertiesPanel;
