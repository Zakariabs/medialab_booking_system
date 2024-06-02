import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./all-done1.module.css";

const AllDone1: NextPage = () => {
  const onReturnButtonImageClick = useCallback(() => {
    // Please sync "ClientHomeScreen" to the project
  }, []);

  return (
    <div className={styles.alldone}>
      <b className={styles.cancel}>Cancel</b>
      <img className={styles.alldoneChild} alt="" src="/ellipse-12.svg" />
      <img className={styles.alldoneItem} alt="" src="/ellipse-13.svg" />
      <div className={styles.yourReservationHasContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          your reservation has been successfully cancelled
        </p>
      </div>
      <img
        className={styles.returnbuttonIcon}
        alt=""
        src="/returnbutton1@2x.png"
        onClick={onReturnButtonImageClick}
      />
    </div>
  );
};

// Cancel page

export default AllDone1;
