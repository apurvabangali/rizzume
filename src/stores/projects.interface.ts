export interface IProjectItem {
    title: string;
    date: string | null;
    summary: string;
    id: string;
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
