import { AnimatePresence, motion } from 'framer-motion';



const animation = {
  exit: {
    height: '0',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0,
  },
};


const EditSectionContainer = ({
  title,
  expanded,
  clickHandler,
  isEnabled,
  children,
}: {
  title: string;
  expanded: boolean;
  clickHandler: () => void;
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  children: JSX.Element;
}) => {
  

  return (
    <div className="shadow-sm rounded-lg">
      <div
        className={`bg-resume-100 shadow-sm h-12 w-full ${
          expanded ? `rounded-t-lg` : `rounded-lg`
        } relative flex items-center justify-between px-4 text-resume-800 font-bold text-lg select-none cursor-pointer z-10`}
        onClick={clickHandler}
      >
        <span>{title}</span>
        <img
          src={isEnabled ? '/icons/edit.svg' : '/icons/edit.svg'}
          alt="edit"
          height="20"
          width="31"
         
        />
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={`bg-resume-10 shadow-sm relative rounded-b-lg px-4 py-6 overflow-hidden ${
              !isEnabled 
            }`}
            exit={animation.exit}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditSectionContainer;
