import { useMemo } from 'react'

interface RootLayoutProps {
  children: JSX.Element[] | null
}

export default function RootLayout({ children }: RootLayoutProps) {
  const childCount = useMemo(() => (children ? children.length : 1), [children])

  return (
    <div className={`min-h-[${childCount * 100}vh] bg-black`}>{children}</div>
  )
}
