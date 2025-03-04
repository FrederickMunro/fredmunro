import React, { createContext, useContext, useState, ReactNode } from 'react';

import { ColorResult } from "react-color";

interface ColorContextProps {
  primaryColor: ColorResult;
  setPrimaryColor: (color: ColorResult) => void;
  secondaryColor: ColorResult;
  setSecondaryColor: (color: ColorResult) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
  const [primaryColor, changePrimaryColor] = useState<ColorResult>({
    hex: '#ffffff',
    rgb: { r: 255, g: 255, b: 255, a: 1 },
    hsl: { h: 0, s: 0, l: 1, a: 1 },
  });
    
  const [secondaryColor, changeSecondaryColor] = useState<ColorResult>({
    hex: '#ffffff',
    rgb: { r: 255, g: 255, b: 255, a: 1 },
    hsl: { h: 0, s: 0, l: 1, a: 1 },
  });

  const setPrimaryColor = (color: ColorResult) => {
    localStorage.setItem('color', JSON.stringify(color.hex));
    document.documentElement.style.setProperty('--main-color', color.hex)
    changePrimaryColor(color);
  };

  const setSecondaryColor = (color: ColorResult) => {
    localStorage.setItem('color', JSON.stringify(color.hex));
    document.documentElement.style.setProperty('--secondary-color', color.hex)
    changeSecondaryColor(color);
  };

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};