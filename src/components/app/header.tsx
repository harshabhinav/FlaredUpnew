'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Bell,
  Home,
  LineChart,
  Package2,
  PanelLeft,
  ShieldCheck,
  Users2,
  Wallet,
} from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/icons'
import UserNav from './user-nav'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/hedging', icon: ShieldCheck, label: 'Hedging' },
  { href: '/accounts', icon: Wallet, label: 'Smart Accounts' },
  { href: '/alerts', icon: Bell, label: 'Alerts' },
]

export default function Header() {
  const pathname = usePathname()
  const pageName =
    navItems.find((item) => pathname.startsWith(item.href))?.label ||
    'HedgeWise'

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">HedgeWise</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname.startsWith(item.href)
                    ? 'flex items-center gap-4 px-2.5 text-foreground'
                    : 'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                }
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">HedgeWise</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{pageName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        {/* Placeholder for future search bar */}
      </div>
      <UserNav />
    </header>
  )
}
