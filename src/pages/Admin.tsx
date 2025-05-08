import React from 'react'
import { Card } from '../components/ui/card'

const topAffiliates = [
  { name: 'Alice', clicks: 1200, signups: 300, payout: 1500 },
  { name: 'Bob', clicks: 900, signups: 250, payout: 1200 },
  { name: 'Charlie', clicks: 700, signups: 200, payout: 900 },
]

export default function Admin() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">Top Affiliates</h2>
      <Card className="p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2">Name</th>
              <th className="py-2">Clicks</th>
              <th className="py-2">Signups</th>
              <th className="py-2">Payout ($)</th>
            </tr>
          </thead>
          <tbody>
            {topAffiliates.map((a) => (
              <tr key={a.name} className="border-b border-border hover:bg-muted">
                <td className="py-2">{a.name}</td>
                <td className="py-2">{a.clicks}</td>
                <td className="py-2">{a.signups}</td>
                <td className="py-2">{a.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
