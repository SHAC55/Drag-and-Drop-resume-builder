import React from 'react';
import { useBuilder } from '../Hooks/useBuilder';

const Canvas = () => {
  const { elements, addElement, selectElement } = useBuilder();

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('elementType');
    const rect = e.currentTarget.getBoundingClientRect();
    const position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    addElement(type, position);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex-1 p-4 bg-gray-100"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="relative border-2 border-dashed border-gray-400 h-[600px] bg-white p-4 overflow-hidden">
        {elements.length === 0 ? (
          <p className="text-center text-gray-400 mt-20">Drop elements here</p>
        ) : (
          elements.map((el, index) => (
            <div
              key={index}
              onClick={() => selectElement(index)}
              className="absolute cursor-pointer"
              style={{
                left: el.position.x,
                top: el.position.y
              }}
            >
              {el.type === 'text' && <p>{el.props.text}</p>}
              {el.type === 'button' && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  {el.props.text}
                </button>
              )}
              {el.type === 'image' && (
                <img
                  src={el.props.src || 'https://via.placeholder.com/150'}
                  alt="Dropped"
                  width="150"
                  className="rounded shadow"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Canvas;
