import { Context, createContext, useEffect, useMemo } from 'react';
import { useResumeStore } from '../../../stores/useResumeStore';
import { AVAILABLE_TEMPLATES } from '../../../helpers/constants';
import { useTemplates } from '../../../stores/useTemplates';

export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const memoizedData = useMemo(() => resumeData, [resumeData]); 
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const TemplateComponent = AVAILABLE_TEMPLATES[templateId]?.component;

  useEffect(() => {
    const selectedTemplateId = localStorage.getItem('selectedTemplateId') || 'modern'; 
    const template = AVAILABLE_TEMPLATES[selectedTemplateId];
    if (template) {
      useTemplates.getState().setTemplate(template);
    } else {
      console.error('Template not found for ID:', selectedTemplateId);
    }
  }, []);

  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div>
        <div className="w-[210mm] h-[296mm] bg-white my-0 mx-auto">
          <StateContext.Provider value={memoizedData}>
            {TemplateComponent ? <TemplateComponent /> : <div>Template not found</div>}
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
