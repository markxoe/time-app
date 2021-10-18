export {};

declare global {
  interface Window {
    ipc: {
      getLocale: () => string;
      closeWindow: () => void;
      darkModeToggle: () => void;
      darkModeReset: () => void;
      minimizeWindow: () => void;
    };
  }
}
