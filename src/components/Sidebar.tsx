import React from 'react'
import { Button } from './ui/button'
import { cn } from '../lib/utils'

interface SidebarProps {
  user: string
  onLogout: () => void
  onNavigate: (page: 'dashboard' | 'admin' | 'links') => void
}

export default function Sidebar({ user, onLogout, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-primary mb-2">Welcome, {user}</h2>
        <nav className="flex flex-col space-y-3">
          <button
            className={cn(
              'text-left px-3 py-2 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition',
            )}
            onClick={() => onNavigate('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={cn(
              'text-left px-3 py-2 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition',
            )}
            onClick={() => onNavigate('links')}
          >
            Generate Links
          </button>
          <button
            className={cn(
              'text-left px-3 py-2 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition',
            )}
            onClick={() => onNavigate('admin')}
          >
            Admin
          </button>
        </nav>
      </div>
      <div className="mt-auto">
        <Button variant="ghost" onClick={onLogout} className="w-full">
          Logout
        </Button>
      </div>
    </aside>
  )
}
