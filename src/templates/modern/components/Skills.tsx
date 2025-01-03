import { IItem } from '../../../stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';

export const SkillsSection = ({ title, list }: { title: string; list: IItem[] }) => {
  return (
    <div className="my-3">
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: IItem, index) => (
          <ul>

          <li
            key={index}
            className="py-1 px-2 text-sm font-medium "
          >
            {item.name}
          </li>
          </ul>
        ))}
      </div>
    </div>
  );
};