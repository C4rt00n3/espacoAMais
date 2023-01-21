import { createContext, useEffect, useState } from "react";
import { unique } from "../../App";
import { api } from "../../service";
import { toast } from "react-toastify";
import {
  iAuthContext,
  iContextRover,
  IPhotosItem,
  IRootObject,
  keyApi,
} from "./types";
import { useNavigate, useParams } from "react-router-dom";

export const ContextRovers = createContext({} as iContextRover);

export const ProviderContextRover = ({ children }: iAuthContext) => {
  const { sol, rovers, cam } = useParams();

  const [rover, setRover] =
    useState<string>(rovers ? rovers : "Perseverance") || "";
  const [photos, setPhotos] = useState([] as IPhotosItem[]);
  const [backup, setBackup] = useState([] as IPhotosItem[]);
  const [sun, setSun] = useState(sol ? Number(sol) : 0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkRequest, setCheckRequest] = useState(true);
  const [cams, setCams] = useState([...unique]);
  const [modalImg, setModalImg] = useState(false);
  const [camera, setCamera] = useState(cam ? cam : "");
  const [index, setIndex] = useState(0);

  const nav = useNavigate();

  useEffect(() => {
    async function Get() {
      !camera.length && setLoading(true);
      if (!camera.length) {
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
    }

    if (!checkRequest) {
      return;
    } else {
      Get();
    }
  }, [rover, sun, page, checkRequest, camera]);

  useEffect(() => {
    if (camera === "") {
      return;
    }
    async function filterCams(name: string) {
      if (name === "Todos") {
        setCamera("");
        nav(`/rover/${rovers}/${sol}`);
        return;
      }
      try {
        setLoading(true);
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          {
            params: {
              sol: sun,
              api_key: keyApi,
              camera: name,
            },
          }
        );
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
    filterCams(camera);
  }, [camera, backup, rover, sun, rovers, sol, nav]);

  return (
    <ContextRovers.Provider
      value={{
        setModalImg,
        modalImg,
        checkRequest,
        setCamera,
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
        setCams,
        cams,
        camera,
        setIndex,
        index,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
};
