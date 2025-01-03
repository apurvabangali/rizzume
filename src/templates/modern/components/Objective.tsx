import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionText } from '../atoms/SectionText';


export const Objective = ({ objective }: { objective: string }) => {
  return (
    <>
      <SectionHeading title="Objective" />
      <HTMLRenderer htmlString={objective} />
    </>
  );
};