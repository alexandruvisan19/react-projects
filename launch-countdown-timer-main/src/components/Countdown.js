import { CountdownContainer } from "./Countdown.styled";
import { useEffect, useReducer } from "react";
import { gsap } from "gsap";

function reducer(state, action) {
  const gap = new Date("Dec 23, 2021 11:00:00") - new Date();
  switch (action.type) {
    case "SECONDS":
      return {
        ...state,
        seconds: Math.floor(
          (gap % action.payload.minutes) / action.payload.seconds
        ),
      };
    case "MINUTES":
      return {
        ...state,
        minutes: Math.floor(
          (gap % action.payload.hours) / action.payload.minutes
        ),
      };
    case "HOURS":
      return {
        ...state,
        hours: Math.floor((gap % action.payload.days) / action.payload.hours),
      };
    case "DAYS":
      return { ...state, days: Math.floor(gap / action.payload.days) };
    default:
      throw new Error();
  }
}

const Countdown = () => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({
        type: "SECONDS",
        payload: { seconds: 1000, minutes: 1000 * 60 },
      });
      dispatch({
        type: "MINUTES",
        payload: { minutes: 1000 * 60, hours: 1000 * 60 * 60 },
      });
      dispatch({
        type: "HOURS",
        payload: { hours: 1000 * 60 * 60, days: 1000 * 60 * 60 * 24 },
      });
      dispatch({
        type: "DAYS",
        payload: { days: 1000 * 60 * 60 * 24 },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownContainer>
      <div>
        <div className="days time-elem">
          <span className="top">
            {state.days < 10 && state.days >= 0 ? "0" + state.days : state.days}
          </span>
        </div>
        <span>Days</span>
      </div>

      <div>
        <div className="hours time-elem">
          <span className="top">
            {state.hours < 10 && state.hours >= 0
              ? "0" + state.hours
              : state.hours}
          </span>
        </div>
        <span>Hours</span>
      </div>

      <div>
        <div className="minutes time-elem">
          <span className="top">
            {state.minutes < 10 && state.minutes >= 0
              ? "0" + state.minutes
              : state.minutes}
          </span>
        </div>
        <span>Minutes</span>
      </div>

      <div>
        <div className="seconds time-elem">
          <span className="top">
            {state.seconds < 10 && state.seconds >= 0
              ? "0" + state.seconds
              : state.seconds}
          </span>
        </div>
        <span>Seconds</span>
      </div>
    </CountdownContainer>
  );
};

export default Countdown;
