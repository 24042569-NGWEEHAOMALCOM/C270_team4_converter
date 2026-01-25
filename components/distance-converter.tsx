'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightLeft } from 'lucide-react'

export default function DistanceConverter() {
  const [kilometers, setKilometers] = useState<string>('')
  const [miles, setMiles] = useState<string>('')

  const handleKilometersChange = (value: string) => {
    setKilometers(value)
    if (value === '' || value === '-') {
      setMiles('')
      return
    }
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      const milesValue = numValue * 0.621371
      setMiles(milesValue.toFixed(2))
    }
  }

  const handleMilesChange = (value: string) => {
    setMiles(value)
    if (value === '' || value === '-') {
      setKilometers('')
      return
    }
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      const kilometersValue = numValue / 0.621371
      setKilometers(kilometersValue.toFixed(2))
    }
  }

  return (
    <Card className="border-border shadow-lg transition-shadow hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md">
            <span className="text-2xl font-semibold">↔</span>
          </div>
          <span className="text-2xl">Distance</span>
        </CardTitle>
        <CardDescription className="text-base">Convert between Kilometers and Miles</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="kilometers" className="text-sm font-medium">
            Kilometers (km)
          </Label>
          <Input
            id="kilometers"
            type="number"
            placeholder="0"
            value={kilometers}
            onChange={(e) => handleKilometersChange(e.target.value)}
            className="h-12 text-lg"
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full bg-muted p-2">
            <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="miles" className="text-sm font-medium">
            Miles (mi)
          </Label>
          <Input
            id="miles"
            type="number"
            placeholder="0"
            value={miles}
            onChange={(e) => handleMilesChange(e.target.value)}
            className="h-12 text-lg"
          />
        </div>
      </CardContent>
    </Card>
  )
}
