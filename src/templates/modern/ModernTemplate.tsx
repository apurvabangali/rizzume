import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { PersonalProjectsSection } from './components/PersonalProjects';
import { useContext } from 'react';
import { StateContext } from '../../modules/builder/resume/ResumeLayout';

export default function ModernTemplate() {
  const resumeData = useContext(StateContext);

  return (
    <div className="p-2">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
      />
      <div className="flex flex-row-reverse">
        <div className="basis-[70%] p-3">
        
          <SummarySection summary={resumeData.basics.summary} />

          <WorkSection experience={resumeData.work} />

          <PersonalProjectsSection personalProjects={resumeData.personalProjects} />
        </div>

        

        <div className="basis-[30%] border-r-2 border-stone-700 p-3">
          <Objective objective={resumeData.basics.objective} />

          <SkillsSection title="Languages" list={resumeData.skills.languages} />

          <SkillsSection title="Technologies" list={resumeData.skills.technologies} />

          <SkillsSection title="Frameworks" list={resumeData.skills.frameworks} />

          <SkillsSection title="Tools" list={resumeData.skills.tools} />

          <EducationSection education={resumeData.education} />
        </div>
      </div>
    </div>
  );
}
