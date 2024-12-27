export interface IProjectItem {
    id: string;
    title: string;
    startDate: string | null;
    isWorking:boolean;
    endDate: string | null;
    summary: string;
  }
  
  export interface IProjectsStore {
    projects: IProjectItem[];
    add: (newProject: IProjectItem) => void;
    get: (index: number) => void;
    remove: (index: number) => void;
    reset: (values: IProjectItem[]) => void;
    onmoveup: (index: number) => void;
    onmovedown: (index: number) => void;
    updateProject: (index: number, updatedInfo: IProjectItem) => void;
  }
  