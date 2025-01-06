import { useEffect } from 'react';



export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  return (
    <button onClick={globalThis?.print} className="border b-2  border-black p-2">
      Download as PDF
    </button>
  );
};
