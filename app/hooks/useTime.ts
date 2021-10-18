import { useEffect, useState } from "react";

export const useTime = (interval: number = 100) => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setTime(Date.now()), interval);
    return () => {
      clearInterval(id);
    };
  }, []);
  return time;
};
