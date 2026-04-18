import CategoryPills from "../components/CategoryPills";
import { btns } from "../assets/data";
import { useState } from "react";
export default function BodyHeader(){
    const [selected , onSelect] = useState<string>(btns[0]);
    return(
        <>
            <div className="grid grid-cols-[auto_1fr] my-2.5">
                <div className="hidden md:flex">Part</div>
                <div className="px-4 overflow-hidden">
                    <CategoryPills btns={btns} selected = {selected} onSelect={onSelect}/>
                </div>
            </div>
        </>
    );
}