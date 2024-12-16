
import { IAwards } from '../../../stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';


export const AwardSection = ({ awardsReceived }: { awardsReceived: IAwards[] }) => {

    
  return (
    <div className="mb-2">
      <SectionHeading title="Awards" />

      {awardsReceived.map((award: IAwards, index: number) => {

const formattedDate = award.date instanceof Date ? 
award.date.toLocaleDateString() : 
'Invalid Date';

        return (
          <div key={index} className="pb-2">
            <SectionTitle label={award.title} />
            <div className="flex justify-between awards-center">
              <SectionSubtitle label={award.awarder} />
              <div>
                <p className="text-xs">{formattedDate}</p>
              </div>
            </div>
            <SectionList>
              {award.summary} 
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};
