'use client'
export default function NavHeader({isCollapse} : {isCollapse: boolean}) {
    return (
        <>
           
            <div className="text-xl">Melon  {isCollapse && <br/>} Kitchen</div>
            
        </>
    )
}