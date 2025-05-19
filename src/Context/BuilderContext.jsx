import React, { createContext, useState, useContext } from 'react';

const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  const addElement = (type, position = { x: 0, y: 0 }) => {
    const defaultProps = {
      text: type === 'button' ? 'Click Me' : 'Sample Text',
      src: ''
    };
    setElements([...elements, { type, props: defaultProps, position }]);
  };

  const selectElement = (index) => setSelectedElementIndex(index);

  const updateElementProps = (index, newProps) => {
    const newElements = [...elements];
    newElements[index].props = { ...newElements[index].props, ...newProps };
    setElements(newElements);
  };

  return (
    <BuilderContext.Provider
      value={{ elements, addElement, selectedElementIndex, selectElement, updateElementProps }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilderContext = () => useContext(BuilderContext);
