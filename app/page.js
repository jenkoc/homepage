import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} pt-5`}>
        <Image className="fadein-img-1" src="logo.svg" width="200" height="200" alt="logo" />
        <h2 className="fadein-text-2 text-left" style={{ maxWidth: "60vw",color: "var(--textColor) !important" }} >
          Helping People Master the Digital World through Innovative IT
          Solutions and Expert Services.
        </h2>
      </div>
    </main>
  );
}