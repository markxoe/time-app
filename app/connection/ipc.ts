export const getLocale = () => window.ipc.getLocale();
export const closeWindow = () => window.ipc.closeWindow();
export const { darkModeReset, darkModeToggle, minimizeWindow } = window.ipc;
