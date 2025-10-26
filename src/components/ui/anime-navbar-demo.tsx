"use client"

import * as React from "react" // Import React
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "./anime-navbar"

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
    view: "landing",
  },
  {
    name: "Dev",
    url: "#",
    icon: FileText,
    view: "dev",
  },
  {
    name: "Design",
    url: "#",
    icon: CreditCard,
    view: "design",
  },
  {
    name: "About",
    url: "#",
    icon: Info,
    view: "landing",
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}