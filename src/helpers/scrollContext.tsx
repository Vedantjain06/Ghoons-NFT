import React, { createContext } from 'react'

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void

export const ScrollContext = createContext<ScrollToFunction>(() => {})
