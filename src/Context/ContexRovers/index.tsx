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
import { useParams } from "react-router-dom";

export const ContextRovers = createContext({} as iContextRover);

export const ProviderContextRover = ({ children }: iAuthContext) => {
  const { sol, rovers, cam, date } = useParams();

  const [rover, setRover] =
    useState<string>(rovers ? rovers : "Perseverance") || "";
  const [photos, setPhotos] = useState([] as IPhotosItem[]);
  const [backup, setBackup] = useState([] as IPhotosItem[]);
  const [sun, setSun] = useState(sol ? Number(sol) : 0);
  const [page, setPage] = useState<number>(1);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkRequest, setCheckRequest] = useState(true);
  const [cams, setCams] = useState([...unique]);
  const [modalImg, setModalImg] = useState(false);
  const [camera, setCamera] = useState(cam ? cam : "");
  const [index, setIndex] = useState(0);
  const [earthDate, setEarthDate] = useState(date ? date : "");

  const newPhotos = photos;

  useEffect(() => {
    if (!earthDate.length) {
      return;
    }

    const noRoverCAm = {
      params: {
        api_key: keyApi,
        earth_date: earthDate,
        page: page,
      },
    };
    const yesRoverCAm = {
      params: {
        api_key: keyApi,
        earth_date: earthDate,
        page: page,
        camera: camera,
      },
    };

    const GetDate = async () => {
      try {
        setLoading((e) => (e ? false : true));
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          camera === "" || "Todos" ? noRoverCAm : yesRoverCAm
        );
        const { data } = response;
        const { photos } = data;

        if (photos.length) {
          setPhotos((e) => [...e, ...photos]);
          setBackup((e) => [...e, ...photos]);
        } else if (!photos.length) {
          if (!newPhotos.length) {
            toast.info("Não encontramos fotos");
          }
          setCheckRequest(false);
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    GetDate();
  }, [camera, earthDate, page, rover]);

  useEffect(() => {
    const requestCam = {
      params: {
        sol: sun,
        api_key: keyApi,
        camera: camera,
        page: page,
      },
    };
    const requestPage = {
      params: {
        sol: sun,
        api_key: keyApi,
        page: Number(page),
      },
    };

    if (date?.length || earthDate.length) {
      return;
    }

    const Get = async () => {
      setLoading(true);

      try {
        const response: IRootObject = await api.get(
          `/rovers/${rover}/photos?`,
          camera.length ? requestCam : requestPage
        );

        const { data } = response;
        const { photos } = data;
        if (photos.length) {
          setPhotos((e) => [...e, ...photos]);
          setBackup((e) => [...e, ...photos]);
          setEarthDate("");
        } else if (!photos.length) {
          if (!newPhotos.length) {
            toast.info("Não encontramos nada!");
          }
          setCheckRequest(false);
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    Get();
  }, [rover, sun, page, checkRequest, camera, earthDate, date]);

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
        setEarthDate,
        earthDate,
      }}
    >
      {children}
    </ContextRovers.Provider>
  );
};
