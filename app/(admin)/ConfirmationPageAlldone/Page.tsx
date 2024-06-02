import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./confirmed-page.module.css";

const ConfirmedPage: NextPage = () => {
  const onReturnButtonImageClick = useCallback(() => {
    // Please sync "ManageReservationsPage" to the project
  }, []);

  const onClickHereTextClick = useCallback(() => {
    // Please sync "ManageReservationsPage" to the project
  }, []);

  return (
    <div className={styles.confirmedpage}>
      <b className={styles.allDone}>All Done</b>
      <img
        className={styles.confirmedpageChild}
        alt=""
        src="/ellipse-121.svg"
      />
      <img className={styles.confirmedpageItem} alt="" src="/ellipse-131.svg" />
      <div className={styles.theReservationHasContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          the reservation has been successfully accepted and the orderer will be
          kept informed
        </p>
      </div>
      <div className={styles.changeYourMind}>
        change your mind and still wish to decline ?
      </div>
      <img
        className={styles.returnbuttonIcon}
        alt=""
        src="/returnbutton2@2x.png"
        onClick={onReturnButtonImageClick}
      />
      <div className={styles.confirmedpageInner} />
      <div className={styles.clickHere} onClick={onClickHereTextClick}>
        Click here
      </div>
    </div>
  );
};

// All -done

export default ConfirmedPage;
