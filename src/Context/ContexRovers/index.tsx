import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkRequest, setCheckRequest] = useState(true);

  useEffect(() => {
    const NewPhotos = photos;
    async function Get() {
      if (!checkRequest) {
        return;
      }

      setLoading(true);

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
          setPhotos([...NewPhotos, ...photos]);
          setBackup([...backup, ...photos]);
        } else {
          setCheckRequest(false);
          setPhotos([]);
          setBackup([]);
          toast.info("não há fotos do dia solar " + sun);
        }
      } catch (error) {
        toast.error("Algo deu errado");
      } finally {
        setLoading(false);
      }
    }
    Get();
  }, [rover, sun, page, checkRequest]);

  console.log(page);

  return (
    <ContextRovers.Provider
      value={{
        checkRequest,
        setCheckRequest,
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
        modal,
        setModal,
        loading,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
};
