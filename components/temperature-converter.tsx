'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightLeft } from 'lucide-react'

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState<string>('')
  const [fahrenheit, setFahrenheit] = useState<string>('')

  const handleCelsiusChange = (value: string) => {
    setCelsius(value)
    if (value === '' || value === '-') {
      setFahrenheit('')
      return
    }
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      const fahrenheitValue = (numValue * 9/5) + 32
      setFahrenheit(fahrenheitValue.toFixed(2))
    }
  }

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value)
    if (value === '' || value === '-') {
      setCelsius('')
      return
    }
    const numValue = parseFloat(value)
    if (!isNaN(numValue)) {
      const celsiusValue = (numValue - 32) * 5/9
      setCelsius(celsiusValue.toFixed(2))
    }
  }

  return (
    <Card className="border-border shadow-lg transition-shadow hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
            <span className="text-2xl font-semibold">°</span>
          </div>
          <span className="text-2xl">Temperature</span>
        </CardTitle>
        <CardDescription className="text-base">Convert between Celsius and Fahrenheit</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="celsius" className="text-sm font-medium">
            Celsius (°C)
          </Label>
          <Input
            id="celsius"
            type="number"
            placeholder="0"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            className="h-12 text-lg"
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-full bg-muted p-2">
            <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fahrenheit" className="text-sm font-medium">
            Fahrenheit (°F)
          </Label>
          <Input
            id="fahrenheit"
            type="number"
            placeholder="32"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            className="h-12 text-lg"
          />
        </div>
      </CardContent>
    </Card>
  )
}
