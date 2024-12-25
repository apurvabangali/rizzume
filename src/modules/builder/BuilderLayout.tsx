import EditorLayout from './editor/EditorLayout';
import { ResumeLayout } from './resume/ResumeLayout';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col h-screen">
       <main className="flex flex-1 h-full">
    <aside className="w-[25vw] min-w-[20rem] print:hidden">
      <EditorLayout />
    </aside>
    <div className="flex flex-col flex-1 justify-center bg-[#f2f2f2] print:bg-white">
      <div className="overflow-auto no-scrollbar p-20">
        <ResumeLayout />
      </div>
    </div>
  </main>
    </div>
  );
};

export default BuilderLayout;
