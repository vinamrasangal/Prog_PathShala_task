// next-themes.d.ts

import { ReactNode } from 'react'

declare module 'next-themes' {
  export interface ThemeProviderProps {
    children?: ReactNode
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    forcedTheme?: string
    enableColorScheme?: boolean
    storageKey?: string
    themes?: string[]
  }

  export interface UseThemeProps {
    theme: string
    setTheme: (theme: string) => void
    resolvedTheme: string
    themes: string[]
    systemTheme: string | undefined
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element
  export function useTheme(): UseThemeProps
}