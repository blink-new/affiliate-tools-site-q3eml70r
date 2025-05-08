import { useState } from 'react'
import { cn } from './lib/utils'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Links from './pages/Links'

// Simple client-side routing for prototype
export default function App() {
  const [user, setUser] = useState<string | null>(null)
  const [page, setPage] = useState<'login' | 'dashboard' | 'admin' | 'links'>('login')

  if (!user) {
    return <Login onLogin={(u) => { setUser(u); setPage('dashboard') }} />
  }

  return (
    <Layout user={user} onLogout={() => { setUser(null); setPage('login') }} onNavigate={setPage}>
      {page === 'dashboard' && <Dashboard />}
      {page === 'admin' && <Admin />}
      {page === 'links' && <Links />}
    </Layout>
  )
}
