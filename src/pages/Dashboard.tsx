import React from 'react'
import { Card } from '../components/ui/card'
import { cn } from '../lib/utils'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, FunnelChart, Funnel, LabelList } from 'recharts'

const clicksData = [
  { name: 'Mon', clicks: 120 },
  { name: 'Tue', clicks: 210 },
  { name: 'Wed', clicks: 150 },
  { name: 'Thu', clicks: 300 },
  { name: 'Fri', clicks: 250 },
  { name: 'Sat', clicks: 400 },
  { name: 'Sun', clicks: 350 },
]

const funnelData = [
  { name: 'Visitors', value: 1000 },
  { name: 'Clicks', value: 800 },
  { name: 'Signups', value: 400 },
  { name: 'Conversions', value: 200 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">Real-time Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-2">Clicks This Week</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={clicksData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" stroke="hsl(var(--chart-2))" />
              <YAxis stroke="hsl(var(--chart-2))" />
              <Tooltip />
              <Bar dataKey="clicks" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-2">Signups This Week</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={clicksData.map(d => ({ name: d.name, clicks: Math.floor(d.clicks / 2) }))} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" stroke="hsl(var(--chart-1))" />
              <YAxis stroke="hsl(var(--chart-1))" />
              <Tooltip />
              <Bar dataKey="clicks" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-4 flex flex-col justify-center items-center">
          <h3 className="text-lg font-medium mb-2">Total Conversions</h3>
          <p className="text-3xl font-bold text-primary">200</p>
        </Card>
      </div>

      <h2 className="text-xl font-semibold text-primary">Conversion Funnel</h2>
      <Card className="p-4">
        <ResponsiveContainer width="100%" height={250}>
          <FunnelChart>
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList position="right" fill="#888" stroke="none" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
