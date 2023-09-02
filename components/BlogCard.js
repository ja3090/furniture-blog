import styles from "../styles/BlogCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  slug,
  imageSrc,
  title,
  blurb,
  author,
  date,
}) {
  return (
    <Link href={`/blogs/${slug}`}>
      <a className={styles["blogcard-container"]}>
        <div className={`${styles["blogcard-wrapper"]}`}>
          <div className={styles.image}>
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={title}
              unoptimized
            />
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <span>{blurb}</span>
          </div>
          <div className={styles.author}>
            <p>
              {author}
              <br></br>
              {date}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
