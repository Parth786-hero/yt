type VideoPillProps = {
  id?: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};
import { formatYouTubeTime , formatYouTubeViews,formatYouTubePostedAt} from "../utils/conversions";
import { MoreVertical } from "lucide-react";
import Button from "./Button";
export default function VideoPill({
  
  title,
  channel,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
  views,
}: VideoPillProps) {
  return (
    <div className="md:mb-1.5 p-2 flex flex-col items-start rounded-lg relative transition-scale duration-300 ease-in-out hover:scale-103">
     <div className="relative w-full max-h-[90%] overflow-hidden rounded-lg">
     <a href={videoUrl} className="rounded-lg w-full h-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="rounded-lg w-full h-full object-cover object-center"
        />
      </a>
      <div className="bg-gray-900 text-white rounded px-2 py-0.5 text-[0.8rem] font-medium absolute right-3 bottom-2 flex items-center justify-center">
        {formatYouTubeTime(duration)}
      </div>
     </div>
     
      <div className="grid gap-3 grid-cols-[auto_1fr] w-full mt-3">
        <div className="w-7 h-7 rounded-full shadow-md overflow-hidden mt-0.5"><img className="block w-full h-full object-center object-cover" src={channel.profileUrl}/></div>
        <div className="grid grid-cols-[1fr_auto]">
            <div className="">
                <h2 className="font-medium w-[98%]">{title}</h2>
                <p className="text-[14px] text-gray-600 my-0.5">{channel.name}</p>
                <div className="text-gray-500 text-[14px] flex items-center gap-1 justify-start">
                    <p>{formatYouTubeViews(views)}</p>
                    <p className="font-bold mb-0.5">.</p>
                    <p>{formatYouTubePostedAt(postedAt)}</p>
                </div>
            </div>
            <Button size="sm" variant="icon" className="px-1 py-1 h-fit"><MoreVertical/></Button>
        </div>
      </div>
    </div>
  );
}
