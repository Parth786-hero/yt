import CategoryPills from "../components/CategoryPills";
import { btns } from "../assets/data";
import { useState } from "react";
import VideoPill from "../components/VideoPill";
import { videos } from "../assets/data";
export default function BodyHeader() {
  const [selected, onSelect] = useState<string>(btns[0]);
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] my-2">
        <div className="hidden md:flex">Part</div>
        <div className="overflow-hidden px-3">
          <div className="relative">
            <CategoryPills
              btns={btns}
              selected={selected} 
              onSelect={onSelect}
            />

            <div className="flex-1 py-4 grid gap-1 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] overflow-hidden overflow-y-auto">
              {videos.map((obj, id) => {
                return <VideoPill key={id} {...obj} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
