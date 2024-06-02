import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./all-done.module.css";

const AllDone: NextPage = () => {
  const router = useRouter();

  const onReturnButtonImageClick = useCallback(() => {
    // Please sync "ClientHomeScreen" to the project
  }, []);

  const onClickHereTextClick = useCallback(() => {
    router.push("/all-done1");
  }, [router]);

  return (
    <div className={styles.alldone}>
      <b className={styles.allDone}>All Done</b>
      <img className={styles.alldoneChild} alt="" src="/ellipse-12.svg" />
      <img className={styles.alldoneItem} alt="" src="/ellipse-13.svg" />
      <div className={styles.yourReservationHasContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p
          className={styles.blankLine}
        >{`Your reservation has been well received and will be confirmed by one of our staff members as soon as possible. In case of any problems of the reservation, you will be kept informed via `}</p>
      </div>
      <div className={styles.raphaeldufourstudentehbbe}>
        Raphael.dufour@student.ehb.be
      </div>
      <div className={styles.changeYourMind}>
        change your mind and still wish to cancel ?
      </div>
      <img
        className={styles.returnbuttonIcon}
        alt=""
        src="/returnbutton1@2x.png"
        onClick={onReturnButtonImageClick}
      />
      <div className={styles.alldoneInner} />
      <div className={styles.clickHere} onClick={onClickHereTextClick}>
        Click here
      </div>
    </div>
  );
};

// all- done userside


export default AllDone;
