import { Menu, Bell, User, Plus, Mic, Search, MoveLeft } from "lucide-react";
import Button from "../components/Button";
import YouTubeLogo from "../components/YouTubeLogo";
import { useState } from "react";
export default function PageHeader() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between mt-2 px-3 gap-3 md:gap-20 overflow-x-hidden">
        {show ? (
          <div className="flex items-center gap-3 shrink-0">
            <Button variant={"icon"}>
              <Menu />
            </Button>
            <a href="/">
              <YouTubeLogo />
            </a>
          </div>
        ) : (
          <Button variant="default-rounded" onClick={() => setShow(true)}>
            <MoveLeft />
          </Button>
        )}
        <form
          action=""
          className={`grow md:max-w-150 gap-2 md:gap-4 ${
            !show ? "flex" : "hidden md:flex "
          }`}
        >
          <div className="flex md:grow items-center w-[90%]">
            <input
              type="text"
              placeholder="Search"
              className="md:grow w-full h-full border border-r-0 border-gray-400 rounded-l-full outline-none px-4 focus:border-blue-400 focus:shadow"
            />

            <Button
              className="rounded-r-full border border-gray-400"
              size={show ? "lg" : "md"}
            >
              <Search />
            </Button>
          </div>
          <Button type="button" className="" variant={"default-rounded"}>
            <Mic />
          </Button>
        </form>
        {show && (
          <div className="flex items-center justify-center md:gap-3">
            <Button
              variant="icon"
              className="md:hidden"
              onClick={() => setShow(false)}
            >
              <Search />
            </Button>

            <Button
              variant="default-rounded"
              size="md"
              className="flex items-center"
            >
              <Plus />
              <p className="font-medium mx-1">Create</p>
            </Button>
            <Button variant="icon" className="relative hidden md:flex">
              <Bell />
              <p className="bg-red-600 text-white rounded-full flex items-center justify-center w-4 text-[11px]  h-4 absolute top-0 right-0">
                9
              </p>
            </Button>
            <Button variant="icon">
              <User />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
