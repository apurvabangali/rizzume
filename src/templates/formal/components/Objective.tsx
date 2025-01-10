import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';
import { SectionHeading } from '../atoms/SectionHeading';


export const Objective = ({ objective }: { objective: string }) => {
  return (
    <>
      <SectionHeading title="Objective" />
      <HTMLRenderer htmlString={objective} />
    </>
  );
};