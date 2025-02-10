import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Your SaaS Solution</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your business with our powerful and intuitive platform.
        </p>
        <div className="space-x-4">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature cards will go here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            © 2024 Your SaaS Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
