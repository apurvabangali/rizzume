import { IItem } from '../../../stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';

export const SkillsSection = ({ title, list }: { title: string; list: IItem[] }) => {
  return (
    <div className="my-3">
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: IItem, index) => (
          <div
            key={index}
            className="py-1 px-2 text-sm font-medium bg-stone-200 rounded-lg"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};