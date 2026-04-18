type DataProps = {
  btns: string[];
  selected: string;
  onSelect: (text: string) => void;
};
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRef } from "react";
export default function CategoryPills(props: DataProps) {
  const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false);
  const [isRightVisible, setIsRightVisible] = useState<boolean>(true);
  const [translate, setTranslate] = useState(0);
  const TRANSLATE_LIMIT: number = 300;
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const visible = container.current.clientWidth;
    const total = container.current.scrollWidth;

    const observerLine = new ResizeObserver(() => {
      if (translate < 0) {
        setIsLeftVisible(true);
      } else {
        setIsLeftVisible(false);
      }
      const maxTranslate = -(total - visible);

      if (translate === maxTranslate) {
        setIsRightVisible(false);
      } else {
        setIsRightVisible(true);
      }
    });

    observerLine.observe(container.current);

    return () => {
      observerLine.disconnect();
    };
  }, [container, translate, props.btns]);

  return (
    <div className="relative overflow-hidden" ref={container}>
      <div
        className="w-max whitespace-nowrap flex gap-2 transition-transform duration-600 ease-in-out"
        style={{ transform: `translateX(${translate}px)` }}
      >
        {props.btns.map((ele: string, id: number) => {
          return (
            <Button
              key={id}
              variant={props.selected === ele ? "ytbtn" : "default"}
              className="px-3.5 py-1.5"
              onClick={() => props.onSelect(ele)}
            >
              <span>{ele}</span>
            </Button>
          );
        })}
      </div>
      {isLeftVisible && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-full"
          onClick={() => {
            setTranslate((prev) => {
              if (prev + TRANSLATE_LIMIT >= 0) return 0;
              return prev + TRANSLATE_LIMIT;
            });
          }}
        >
          <Button className="aspect-square w-full h-full bg-linear-to-r from-white to-transparent flex justify-center rounded-sm">
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-full"
          onClick={() =>
            setTranslate((prev) => {
              if (container.current !== null) {
                const visible = container.current.clientWidth;
                const total = container.current.scrollWidth;

                // max negative translate allowed
                const maxTranslate = -(total - visible);

                // if next step would overshoot, clamp
                if (prev - TRANSLATE_LIMIT <= maxTranslate) {
                  return maxTranslate;
                }

                return prev - TRANSLATE_LIMIT;
              }
              return prev;
            })
          }
        >
          <Button className="aspect-square w-full h-full bg-linear-to-l from-white to-transparent flex justify-center rounded-sm">
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
