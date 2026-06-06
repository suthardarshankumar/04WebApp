import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js + Tailwind CSS + shadcn/ui
          </h1>
          <p className="text-lg text-gray-600">
            A beautiful setup with components and custom styling
          </p>
        </div>

        {/* Card Example */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>shadcn/ui Card Component</CardTitle>
              <CardDescription>
                This is a reusable card component from shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                The Card component provides a clean, customizable container for your content.
                It comes with built-in styling and is fully responsive.
              </p>
              <p className="text-sm text-gray-500">
                Perfect for organizing content into sections!
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                What's included in this setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Next.js 15+
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tailwind CSS v4
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  shadcn/ui Components
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  JavaScript (No TypeScript)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Button Examples */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow mb-12">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>
              shadcn/ui Button component with custom Tailwind styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* shadcn Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                shadcn/ui Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>

            {/* Custom Tailwind Styled Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Custom Tailwind CSS Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* Gradient Button */}
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-md">
                  Gradient Button
                </button>

                {/* Glow Button */}
                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl">
                  Glow Button
                </button>

                {/* Neon Button */}
                <button className="px-6 py-2 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200">
                  Neon Button
                </button>

                {/* Glass Morphism Button */}
                <button className="px-6 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200">
                  Glass Button
                </button>

                {/* Animated Button */}
                <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 animate-pulse">
                  Animated Button
                </button>
              </div>
            </div>

            {/* Button Sizes and States */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Size Variations (Custom Tailwind)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                  Small
                </button>
                <button className="px-6 py-2 text-base bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                  Medium
                </button>
                <button className="px-8 py-3 text-lg bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition font-semibold">
                  Large
                </button>
                <button className="px-8 py-3 text-lg bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Disabled
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tailwind CSS Classes Demo */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Tailwind CSS Utilities</CardTitle>
            <CardDescription>
              Common Tailwind classes used in this example
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Spacing</h4>
                <p className="text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">p-8, mb-12, gap-4</code>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Colors</h4>
                <p className="text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">bg-blue-50, text-gray-900</code>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hover Effects</h4>
                <p className="text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">hover:shadow-xl, hover:scale-105</code>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Responsive</h4>
                <p className="text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded">md:grid-cols-2, md:text-lg</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
