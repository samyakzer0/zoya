"use client"

import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "./anime-navbar"
import type { ViewMode } from "../../store/portfolioStore"

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
    view: "landing" as ViewMode,
  },
  {
    name: "Dev",
    url: "#",
    icon: FileText,
    view: "dev" as ViewMode,
  },
  {
    name: "Design",
    url: "#",
    icon: CreditCard,
    view: "design" as ViewMode,
  },
  {
    name: "About",
    url: "#",
    icon: Info,
    view: "landing" as ViewMode,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}