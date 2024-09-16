'use client'

import { Button } from "@/components/ui/button";
import { LucideIcon} from 'lucide-react'

interface NavButtonProps {
    icon: LucideIcon;
    label: string;
    isSelected: boolean;
    isCollapse: boolean
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, label, isSelected, isCollapse}) => (
    <Button variant={isSelected ? 'default' : 'ghost'} className={isCollapse ? "w-full justify-center mb-2" : "w-full justify-start mb-2"}>
        <Icon className="mr-2 h-4 w-4" />
        {!isCollapse && label}
    </Button>
)


export {NavButton};