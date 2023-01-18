export interface iContextRover {
  rover: string;
  setRover: React.Dispatch<React.SetStateAction<string>>;
  photos: IPhotosItem[];
  setPhotos: React.Dispatch<React.SetStateAction<IPhotosItem[]>>;
  backup: IPhotosItem[];
  setBackup: React.Dispatch<React.SetStateAction<IPhotosItem[]>>;
  sun: number;
  page: number;
  setSun: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  loading: boolean;
  checkRequest: boolean;
  setCheckRequest: React.Dispatch<React.SetStateAction<boolean>>;
  filterCams(name: string): Promise<void>;
  cams: {
    name: string;
    list: boolean;
    sigla: string;
  }[];
  setCams: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        list: boolean;
        sigla: string;
      }[]
    >
  >;
}

export interface iAuthContext {
  children: React.ReactNode;
}

export type IRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};
export type ICamera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

export type IPhotosItem = {
  id: number;
  sol: number;
  camera: ICamera;
  img_src: string;
  earth_date: string;
  rover: IRover;
};

export type IRootObject = {
  data: IData;
};

export type IData = {
  photos: IPhotosItem[];
};

export const keyApi = "Rch4gMGLMCL8A7Pn9gWbvbeYI8NMUGazYaJitp7K";
