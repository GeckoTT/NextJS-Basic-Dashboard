'use client'
import * as React from "react"
import { NotebookPen, Home, ChartBarStacked, Tags, User } from 'lucide-react'
import { NavButton } from "@/components/cq/NavButton"
import Link from "next/link"


export default function Nav({ currentPath, isCollapse }: { currentPath: string, isCollapse: boolean }) {
    const navItems = [
        { icon: Home, label: 'Dashboard', path: "/" },
        { icon: NotebookPen, label: 'Post', path: "/posts" },
        { icon: ChartBarStacked, label: 'Category', path: "/categories" },
        { icon: Tags, label: 'Tags', path: "/tags" },
        { icon: User, label: 'Users', path: "/users" },
    ]

    return (
        <>
            {navItems.map((item) => (
                <Link href={item.path} key={item.label}>
                    <NavButton
                        isCollapse={isCollapse}
                        icon={item.icon}
                        label={item.label}
                        isSelected={currentPath === item.path}
                    />
                </Link>
            ))}
        </>

    )
}