import * as Separator from "@radix-ui/react-separator";
import { motion } from 'framer-motion';
import { headers } from '../../../../helpers/constants/editor-data';
import HeaderTitle from '../atoms/HeaderTitle';

const animation = {
  initial: { x: -25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const EditHeaders = ({ onLinkClick }: { onLinkClick: (link: string) => void }) => {
  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      {Object.entries(headers).map(([link, { title }]) => (
        <a onClick={() => onLinkClick(link)} key={title}>
          <HeaderTitle title={title} />
          <Separator.Root orientation="horizontal"
           style={{ margin: '10px 0', borderBottom: '1px solid',color:'bluegreen', width: '100%' }} />
        </a>
      ))}
    </motion.div>
  );
};

export default EditHeaders;