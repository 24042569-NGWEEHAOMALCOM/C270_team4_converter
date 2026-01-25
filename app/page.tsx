import TemperatureConverter from '@/components/temperature-converter'
import DistanceConverter from '@/components/distance-converter'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Accent Circles */}
        <div className="absolute left-[-5%] top-[-5%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-[50%] top-[40%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Diagonal Lines */}
        <div className="absolute left-0 top-0 h-[2px] w-full origin-top-left rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-[30%] right-0 h-[2px] w-full origin-top-right -rotate-12 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-12">
        <div className="space-y-3 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Unit Converter
          </h1>
          <p className="text-pretty text-lg text-muted-foreground sm:text-xl">
            Convert temperature and distance with ease
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TemperatureConverter />
          <DistanceConverter />
        </div>
      </div>
    </main>
  )
}
