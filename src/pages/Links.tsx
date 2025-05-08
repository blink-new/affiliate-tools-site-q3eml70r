import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card } from '../components/ui/card'

export default function Links() {
  const [baseUrl, setBaseUrl] = useState('https://example.com')
  const [affiliateId, setAffiliateId] = useState('')
  const [generatedLink, setGeneratedLink] = useState('')

  const generateLink = () => {
    if (!baseUrl || !affiliateId) return
    const url = new URL(baseUrl)
    url.searchParams.set('aff', affiliateId)
    setGeneratedLink(url.toString())
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">Generate Affiliate Link</h2>
      <Card className="p-6 space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-medium" htmlFor="baseUrl">
            Base URL
          </label>
          <Input
            id="baseUrl"
            type="url"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://example.com/product"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="affiliateId">
            Affiliate ID
          </label>
          <Input
            id="affiliateId"
            type="text"
            value={affiliateId}
            onChange={(e) => setAffiliateId(e.target.value)}
            placeholder="Your affiliate ID"
          />
        </div>
        <Button onClick={generateLink} className="w-full">
          Generate Link
        </Button>
        {generatedLink && (
          <div className="mt-4 break-all">
            <p className="font-semibold">Generated Link:</p>
            <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              {generatedLink}
            </a>
          </div>
        )}
      </Card>
    </div>
  )
}
