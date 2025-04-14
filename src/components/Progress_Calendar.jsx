import React, { useState } from "react";
import styles from "./style/Calendar.module.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKS = 5;
const DAYS = 7;
const LEVELS = 5;
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const OY = new Date().getMonth()

const ProgressCalendar = () => {
  const [progress, setProgress] = useState(
    Array(WEEKS).fill(null).map(() => Array(DAYS).fill(0))
  );

  const toggleProgress = (weekIdx, dayIdx) => {
    setProgress((prev) => {
      const updated = [...prev];
      updated[weekIdx][dayIdx] = (updated[weekIdx][dayIdx] + 1) % LEVELS;
      return updated;
    });
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <h2>My Progress</h2>
        <span>{MONTHS[OY]}</span>
      </div>
      <div className={styles.calendarDays}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.calendarDayLabel}>{day}</div>
        ))}
      </div>
      <div className={styles.calendarGrid}>
        {progress.map((week, weekIdx) =>
          week.map((level, dayIdx) => (
            <div
              key={`${weekIdx}-${dayIdx}`}
              className={`${styles.calendarCell} ${styles["level" + level]}`}
              onClick={() => toggleProgress(weekIdx, dayIdx)}
            ></div>
          ))
        )}
      </div>
      <div className={styles.legend}>
        <span>Low</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={`${styles.legendBox} ${styles["level" + level]}`}></div>
        ))}
        <span>Full</span>
      </div>
    </div>
  );
};

export default ProgressCalendar;
