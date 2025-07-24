import Link from "next/link";

import Arrow from "../../icons/arrow/arrow";
import styles from "./Button.module.scss";

export default function Button({
  url,
  target,
  type,
  children,
}: {
  url: string;
  target?: string;
  type: string;
  children: React.ReactNode;
}) {
  if (type === "link") {
    return (
      <Link href={url} className={styles.button} target={target}>
        <span>{children}</span>
        <Arrow />
      </Link>
    );
  }
  return (
    <button className={styles.button}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
}
