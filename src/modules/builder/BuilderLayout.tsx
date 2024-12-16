import EditorLayout from './editor/EditorLayout';
import { ResumeLayout } from './resume/ResumeLayout';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col h-screen">
       <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
    <aside className="w-[25vw] min-w-[20rem] print:hidden">
      <EditorLayout />
    </aside>
    <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white">
      <div className="overflow-auto no-scrollbar">
        <ResumeLayout />
      </div>
    </div>
  </main>
    </div>
  );
};

export default BuilderLayout;
