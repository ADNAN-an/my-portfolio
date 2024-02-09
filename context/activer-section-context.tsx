"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'

type ActiverSectionContextProps = {
    children: React.ReactNode;
}
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
export const ActiverSectionContext = createContext<ActiveSectionContextType | null>(null);
export default function ActiverSectionContextProvider({children}: ActiverSectionContextProps) {
  const [activeSection , setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick , setTimeOfLastClick] = useState(0);
  return <ActiverSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick , setTimeOfLastClick}}>
    {children}
  </ActiverSectionContext.Provider>
}

export function useActiveSectionContext(){
    const context = useContext(ActiverSectionContext)

    if(context === null){
        throw new Error(
            "useActiveSectionContext must be within an ActiveSectionContextProvider"
        )
    }

    return context;
}