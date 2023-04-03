import React, { createContext, useState } from 'react'

interface GeneralContextType {
  theme: string
  setTheme: (theme: string) => void
}

const initialGeneralContext: GeneralContextType = {
  theme: 'light',
  setTheme: () => {},
}

type GeneralContextProviderProps = {
  children: React.ReactNode
}

export const GeneralContext = createContext<GeneralContextType>(
  initialGeneralContext
)

export const GeneralContextProvider = ({
  children,
}: GeneralContextProviderProps) => {
  const [theme, setTheme] = useState<string>('light')

  return (
    <GeneralContext.Provider value={{ theme, setTheme }}>
      {children}
    </GeneralContext.Provider>
  )
}
