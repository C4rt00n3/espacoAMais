import { createContext, useState } from "react";

interface iContextRover {
  rover: "Curiosity" | "Opportunity" | "Spirit" | "Perseverance" | "";
  setRover: React.Dispatch<
    React.SetStateAction<
      "" | "Curiosity" | "Opportunity" | "Spirit" | "Perseverance"
    >
  >;
}

export interface iAuthContext {
  children: React.ReactNode;
}

export const ContextRovers = createContext({} as iContextRover);

export const ProviderContextRover = ({ children }: iAuthContext) => {
  const [rover, setRover] = useState<
    "Curiosity" | "Opportunity" | "Spirit" | "Perseverance" | ""
  >("Perseverance");

  return (
    <ContextRovers.Provider value={{ rover, setRover }}>
      {children}
    </ContextRovers.Provider>
  );
};
