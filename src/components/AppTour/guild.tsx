import DirectionIcon from '@/assets/svg/polygon-left.svg'
import CloseIcon from '@/assets/svg/close-circle-tour.svg'
import {Button} from '@/components/ui/button'

interface TourGuildProps {
  isLeft?: boolean;
  title: string;
  onClose: () => void;
  nextStep:() => void;
  desc: string;
  counter: number
}

const TourGuild:React.FC<TourGuildProps> = ({ isLeft = true, title, onClose, nextStep, desc, counter }) => {
   return (
     <div className="flex z-50 relative">
       {isLeft && (
         <div className="mt-2">
           <DirectionIcon />
         </div>
       )}
       <div className="flex flex-col h-[174px]">
         <div className="w-full sm:w-[289px]  rounded-2xl bg-[#3D663D] p-4 text-white -ml-2">
           <div className="flex justify-between">
             <div className="flex flex-col w-full">
               <p className="text-base font-bold mb-1">{title}</p>
               <span className="text-xs text-[#ECF0EC] sm:w-[198px]">
                 {desc}
               </span>
             </div>
             <span className="w-4 h-4" onClick={onClose}>
               <CloseIcon />
             </span>
           </div>
           <div className="w-full flex justify-end h-[30px] mt-4">
             <div className="flex sm:w-[134px] justify-end gap-4 ">
               <span>{counter} of 6</span>
               <Button className="bg-white text-black" onClick={nextStep}>
                 {counter === 6 ? 'Finish' : 'Next'}
               </Button>
             </div>
           </div>
         </div>
         {!isLeft && (
           <div className="-rotate-90 absolute bottom-1 left-24 mx-auto">
             <DirectionIcon />
           </div>
         )}
       </div>
     </div>
   );
}

export default TourGuild