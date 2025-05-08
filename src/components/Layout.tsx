import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
import { Button } from './ui/button'

interface LayoutProps {
  user: string
  onLogout: () => void
  onNavigate: (page: 'dashboard' | 'admin' | 'links') => void
  children: ReactNode
}

export default function Layout({ user, onLogout, onNavigate, children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar onNavigate={onNavigate} onLogout={onLogout} user={user} />
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary">Affiliate Tools Dashboard</h1>
          <Button variant="outline" onClick={onLogout}>Logout</Button>
        </header>
        <section>{children}</section>
      </main>
    </div>
  )
}
