import { RoutesMain } from "./Routes/RoutesMain";
interface iCamsList {
  name: string;
  list: boolean;
  sigla: string;
}
export const unique: iCamsList[] = [
  {
    name: "Todos",
    list: true,
    sigla: "Todos",
  },
  {
    name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
    list: false,
    sigla: "MINITES",
  },
  { name: "Panoramic Camera", list: false, sigla: "PANCAM" },
  { name: "Navigation Camera", list: false, sigla: "NAVCAM" },
  { name: "Mars Descent Imager", list: false, sigla: "MARDI" },
  { name: "Mars Hand Lens Imager", list: false, sigla: "MAHLI" },
  { name: "Chemistry and Camera Complex", list: false, sigla: "CHEMCAM" },
  { name: "Mast Camera", list: false, sigla: "MAST" },
  { name: "Rear Hazard Avoidance Camera", list: false, sigla: "RHAZ" },
  { name: "Front Hazard Avoidance Camera", list: false, sigla: "FHAZ" },

  { name: "Rover Up-Look Camera ", list: false, sigla: "EDL_RDCAM" },
  { name: "Rover Down-Look Camera", list: false, sigla: "EDL_RDCAM" },
  { name: "Descent Stage Down-Look Camera", list: false, sigla: "EDL_DDCAM" },
  { name: "Parachute Up-Look Camera A", list: false, sigla: "EDL_PUCAM1" },
  { name: "Parachute Up-Look Camera B", list: false, sigla: "EDL_PUCAM2" },
  { name: "Navigation Camera - Left", list: false, sigla: "NAVCAM_LEFT" },
  { name: "Navigation Camera - Right ", list: false, sigla: "NAVCAM_RIGHT" },
  { name: "Mast Camera Zoom - Right", list: false, sigla: "MCZ_RIGHT" },
  { name: "Mast Camera Zoom - Left", list: false, sigla: "MCZ_LEFT" },
  {
    name: "Front Hazard Avoidance Camera - Left",
    list: false,
    sigla: "FRONT_HAZCAM_LEFT_A",
  },
  {
    name: "Front Hazard Avoidance Camera - Right",
    list: false,
    sigla: "FRONT_HAZCAM_RIGHT_A ",
  },
  {
    name: "Rear Hazard Avoidance Camera - Left",
    list: false,
    sigla: "REAR_HAZCAM_LEFT ",
  },
  {
    name: "Rear Hazard Avoidance Camera - Right",
    list: false,
    sigla: "REAR_HAZCAM_RIGHT",
  },
  { name: "MEDA Skycam", list: false, sigla: "SKYCAM" },
  { name: "SHERLOC WATSON Camera ", list: false, sigla: "SHERLOC_WATSON " },
];

function App() {
  return (
    <div className="App">
      <RoutesMain />
    </div>
  );
}

export default App;
