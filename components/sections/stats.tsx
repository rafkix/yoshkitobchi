'use client'

import { Card } from '@/components/ui/card'
import { Users, BookOpen, Zap, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '1,000+',
    label: 'Active Readers',
    color: 'from-primary to-accent',
  },
  {
    icon: BookOpen,
    value: '50+',
    label: 'Literary Works',
    color: 'from-accent to-primary',
  },
  {
    icon: Zap,
    value: '15,000+',
    label: 'Tests Completed',
    color: 'from-primary to-purple-500',
  },
  {
    icon: Globe,
    value: '92%',
    label: 'Completion Rate',
    color: 'from-purple-500 to-accent',
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">By The Numbers</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of passionate readers in 2026
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-background animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${stat.color}`} />

                <div className="p-6 text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.value}</p>
                    <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
