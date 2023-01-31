export interface iAuthContext {
  children: React.ReactNode;
}

export interface IValueAuthContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
