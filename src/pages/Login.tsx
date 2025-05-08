import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

interface LoginProps {
  onLogin: (user: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mock login
    if (email && password) {
      onLogin(email)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-8 rounded-md shadow-md w-96 space-y-6"
      >
        <div className="flex flex-col items-center mb-2">
          <img
            src="/login-logo.png"
            alt="Blink Logo"
            className="w-16 h-16 rounded-2xl shadow-lg mb-4 bg-[#222] object-cover animate-fade-in"
          />
        </div>
        <h2 className="text-2xl font-bold text-primary text-center">Affiliate Tools Login</h2>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}