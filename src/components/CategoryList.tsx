import { btns } from "../assets/data";
import Button from "./Button";
import { useState } from "react";
export default function CategoryList() {
    const [select , onSelect] = useState("All");
  return (
    <>
      {btns.map((btn, id) => {
        return (
          <Button
            key={id}
            variant={select === btn ? "ytbtn" : "default"}
            size={"default-ytsize"}
            className="whitespace-nowrap font-medium tracking-wide"
            onClick = {()=>onSelect(btn)}
          >
            {btn}
          </Button>
        );
      })}
    </>
  );
}
