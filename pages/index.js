import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import styles from "../styles/BlogGrid.module.css";

export default function Home() {
  return (
    <div data-theme="light">
      <Layout isHome={true}>
        <div id="blogs" className={styles["blog-ref"]}>
          Blogs
        </div>
        <div className={styles.container}>
          <div className={styles["button-wrapper"]}>
            {/* {pages.map((p) => (
              <a
                key={p}
                onClick={() => setPage(p)}
                className={`${styles["page-button"]}
                ${currentPage === p ? styles.active : ""}`}
              >
                {p}
              </a>
            ))} */}
          </div>
          <div className={styles["blogcards-wrapper"]}>
            <BlogCard
              slug={"quis-varius"}
              imageSrc="/otherBlogs/livingroomDone.jpg"
              title="Quis Varius Quam Quisque"
              blurb="Sit amet aliquam id diam maecenas ultricies mi. Quis varius quam quisque id diam vel quam elementum pulvinar. Sagittis purus sit amet volutpat consequat mauris."
              author="John Doe"
              date="31/08/2023"
            />
            <BlogCard
              slug={"sapien-pellentesque"}
              imageSrc="/otherBlogs/sofaandbooksDone.jpg"
              title="Sapien Pellentesque Habitant"
              blurb="Sapien pellentesque habitant morbi tristique senectus et. Suscipit adipiscing bibendum est ultricies integer quis. Non blandit massa enim nec dui nunc mattis enim."
              author="John Doe"
              date="05/08/2023"
            />
            <BlogCard
              slug={"augue-interdum"}
              imageSrc="/otherBlogs/tablewater.jpg"
              title="Augue Interdum Velit Euismod In"
              blurb="Augue interdum velit euismod in. Sit amet cursus sit amet dictum sit amet justo donec. Pulvinar pellentesque habitant morbi tristique senectus et netus."
              author="John Doe"
              date="22/07/2023"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
