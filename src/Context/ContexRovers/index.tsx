import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { unique } from "../../App";
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
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkRequest, setCheckRequest] = useState(true);
  const [cams, setCams] = useState([...unique]);

  useEffect(() => {
    async function Get() {
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
          setPhotos((e) => [...e, ...photos]);
          setBackup((e) => [...e, ...photos]);
        } else if (!photos.length) {
          setCheckRequest(false);
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (!checkRequest) {
      console.log("aoba");
      return;
    } else {
      Get();
    }
  }, [rover, sun, page, checkRequest]);

  async function filterCams(name: string) {
    if (name === "Todos") {
      setPhotos(backup);
      return;
    }
    try {
      const response: IRootObject = await api.get(`/rovers/${rover}/photos?`, {
        params: {
          sol: sun,
          api_key: keyApi,
          camera: name,
        },
      });
      const { data } = response;
      const { photos } = data;
      if (photos.length) {
        setPhotos(photos);
      } else {
        toast.info("Não há photos para essa camera");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

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
        filterCams,
        setCams,
        cams,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
};
