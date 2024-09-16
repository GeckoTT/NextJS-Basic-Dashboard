'use client'
import { ResizablePanel } from "@/components/ui/resizable";
import NavHeader from "@/components/cq/NavHeader";
import Nav from "@/components/cq/Nav";
import { NavButton } from "@/components/cq/NavButton";
import { LogOut } from "lucide-react"
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Sidebar() {
    const [collapse, setCollapse] = useState(false)
    const pathname = usePathname();
    const currentPath = '/' + (pathname.split('/')[1] || '');

    return (
        <ResizablePanel defaultSize={20}
            collapsedSize={5}
            collapsible={true}
            minSize={5}
            maxSize={25}
            onCollapse={() => setCollapse(true)}
            onResize={() => setCollapse(false)}
            className={cn(
                "transition-all duration-300 ease-in-out",
                collapse ? "min-w-[50px]" : "min-w-[200px]"
            )}
        >
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <div className="mt-5 text-center">
                        <NavHeader
                            key={"navheader"}
                            isCollapse={collapse}></NavHeader>
                    </div>
                    <div className="mt-8 pl-2 pr-2">
                        <Nav key={"navwithpath"} isCollapse={collapse} currentPath={currentPath}></Nav>
                    </div>
                </div>
                <div className="mb-8 pl-2 pr-2">
                    <NavButton
                        isCollapse={collapse}
                        key={"logoutbtn"}
                        icon={LogOut}
                        label={"Logout"}
                        isSelected={false}
                    ></NavButton>
                </div>
            </div>
        </ResizablePanel>
    )
}