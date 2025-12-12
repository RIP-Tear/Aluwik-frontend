import { Text } from "@/components/atoms/text/Text";
import { Snowflake } from "lucide-react";
import React from "react";
import styles from "./holiday-navbar.module.css";

const HolidayNavbar = () => {
  return (
    <div className={styles.holidayNavbar}>
      <div className={styles.snowflakes}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.snowflake}>
            ❄
          </div>
        ))}
      </div>

      <div className={styles.lights}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.light} style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Snowflake className={styles.spinningIcon} size={28} />
        </div>

        <div className={styles.messageWrapper}>
          <Text
            text="Przerwa świąteczna: 24 grudnia - 6 stycznia"
            size={18}
            className={styles.dateText}
          />
          <Text text="🎄 Wesołych Świąt! 🎄" size={24} className={styles.mainText} />
        </div>

        <div className={styles.iconWrapper}>
          <Snowflake className={styles.spinningIcon} size={28} />
        </div>
      </div>
    </div>
  );
};

export default HolidayNavbar;
