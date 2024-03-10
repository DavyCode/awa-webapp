import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";

dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Africa/Lagos");

const padNumber = (num: number) => {
  if (num < 10) return `0${num}`;
  return num;
};

const useCountdownTimer = (
  isActive: boolean,
  setIsActive: (arg: boolean) => void,
) => {
  const elapsedTimeRef = useRef<number>(0);
  const timeToElapseRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  const startTime = useRef<number>(0);
  const [countDownTimer, setcountDownTimer] = useState("02:00");
  const [requestCount, setrequestCount] = useState(0);
  const [retryTime, setRetryTime] = useState(2);

  const timeLoop = () => {
    const timeStamp = dayjs().valueOf();
    const delta = timeStamp - elapsedTimeRef.current;

    const remainingTime = timeToElapseRef.current - timeStamp;

    if (delta >= 1000) {
      const a = dayjs.duration(timeToElapseRef.current, "milliseconds");
      const b = dayjs.duration(timeStamp, "milliseconds");
      const diff = a.subtract(b);
      const min = diff.minutes() < 0 ? 0 : diff.minutes();
      const sec = diff.seconds() < 0 ? 0 : diff.seconds();
      setcountDownTimer(`${padNumber(min)}:${padNumber(sec)}`);
      elapsedTimeRef.current = timeStamp;
    }
    if (remainingTime > 0) {
      animationFrameRef.current = requestAnimationFrame(timeLoop);
    } else {
      setIsActive(true);
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  useEffect(() => {
    if (!isActive && requestCount <= 2) {
      let mins = 0;
      let secs = 0;

      const setTime = dayjs().tz("Africa/Lagos").add(retryTime, "minutes");
      console.log("setTime :>> ", setTime);
      const expiryTime = setTime.diff(dayjs().tz("Africa/Lagos"), "seconds");
      console.log("expiryTime :>> ", expiryTime);
      mins = expiryTime / 60;
      secs = expiryTime % 60;
      setcountDownTimer(
        `${padNumber(parseInt(`${mins || 0}`))}:${padNumber(secs)}`,
      );
      startTime.current = dayjs().tz("Africa/Lagos").valueOf();
      timeToElapseRef.current = dayjs()
        .tz("Africa/Lagos")
        .add(parseInt(`${mins}`), "minutes")
        .add(secs, "seconds")
        .valueOf();
      requestAnimationFrame(timeLoop);
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      switch (requestCount) {
        case 0:
          setcountDownTimer("02:00");
          break;
        case 1:
          setcountDownTimer("03:00");
          break;
        case 2:
          setcountDownTimer("05:00");
          break;

        default:
          setcountDownTimer("00:00");
          break;
      }
    };
  }, [isActive, requestCount, retryTime]);

  return {
    countDownTimer,
    retryTime,
    setRetryTime,
    requestCount,
    setrequestCount,
  };
};

export default useCountdownTimer;
