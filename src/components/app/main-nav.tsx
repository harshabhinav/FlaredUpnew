'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart,
  Bell,
  Home,
  ShieldCheck,
  Wallet,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Logo } from '@/components/icons'
import { Separator } from '../ui/separator'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/hedging', icon: ShieldCheck, label: 'Hedging' },
  { href: '/accounts', icon: Wallet, label: 'Smart Accounts' },
  { href: '/alerts', icon: Bell, label: 'Alerts' },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <aside className="sticky top-0 left-0 hidden h-screen w-16 flex-col border-r bg-card sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Logo className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">HedgeWise</span>
          </Link>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
                    pathname.startsWith(item.href)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Separator />
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Wallet className="h-5 w-5" />
                <span className="sr-only">Smart Account</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <div className="text-sm font-medium">Smart Account</div>
              <div className="text-xs text-muted-foreground">0x1234...abcd</div>
            </TooltipContent>
          </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  )
}
