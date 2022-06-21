import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ props }) => {
  // sample value to be replaced
  // let count = props.count || 0;
  // NOTE: do not delete `data-testid` key value pair
  const [track, setTrack] = useState(props.count);

  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          setTrack((p) => p + 1);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value">{track}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          if (track == 0) {
            return;
          }
          setTrack((p) => p - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
