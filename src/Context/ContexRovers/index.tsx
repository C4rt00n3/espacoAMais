import { createContext, useEffect, useState } from "react";
import { api } from "../../service";
import {
  iAuthContext,
  iContextRover,
  IPhotosItem,
  IRootObject,
  keyApi,
} from "./types";

export const ContextRovers = createContext({} as iContextRover);

export const ProviderContextRover = ({ children }: iAuthContext) => {
  const [rover, setRover] = useState<string>("Perseverance");
  const [photos, setPhotos] = useState([] as IPhotosItem[]);
  const [backup, setBackup] = useState([] as IPhotosItem[]);
  const [sun, setSun] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function Get() {
      try {
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          {
            params: {
              sol: sun,
              api_key: keyApi,
              page: Number(page),
            },
          }
        );
        const { data } = response;
        const { photos } = data;
        if (photos.length) {
          setPhotos((e) => [...e, ...photos]);
          setBackup((e) => [...e, ...photos]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Get();
  }, [rover, sun, page]);

  return (
    <ContextRovers.Provider
      value={{
        rover,
        setRover,
        sun,
        page,
        setBackup,
        setPage,
        setPhotos,
        setSun,
        backup,
        photos,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
};
