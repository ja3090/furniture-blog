import Layout from "../../components/Layout";
import styles from "../../styles/BlogMain.module.css";
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <Layout
      isHome={false}
      img="/otherBlogs/tablewater.jpg"
      blogTitle="Augue Interdum Velit Euismod In"
      blogAuthor="John Doe"
      blogDate="22/07/2023"
    >
      <div className={styles.container}>
        <main className={styles.body}>
          <>
            <p>
              <strong>L</strong>orem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisl condimentum id venenatis a. Diam
              vulputate ut pharetra sit amet aliquam id diam. Nibh cras pulvinar
              mattis nunc. Malesuada pellentesque elit eget gravida cum sociis.
              Pellentesque nec nam aliquam sem et tortor consequat id.{" "}
            </p>
            <p>
              Pretium nibh ipsum consequat nisl vel pretium lectus quam. Massa
              massa ultricies mi quis. Amet consectetur adipiscing elit
              pellentesque. Scelerisque varius morbi enim nunc faucibus a.
              Malesuada fames ac turpis egestas. Imperdiet proin fermentum leo
              vel. Nibh sit amet commodo nulla facilisi nullam. Nisi quis
              eleifend quam adipiscing vitae proin sagittis. Elit sed vulputate
              mi sit amet mauris commodo quis. Leo in vitae turpis massa sed
              elementum tempus egestas sed. Non enim praesent elementum
              facilisis leo vel fringilla est. Nunc sed blandit libero volutpat.
              Sit amet risus nullam eget. Feugiat nisl pretium fusce id. Est
              placerat in egestas erat imperdiet. Lectus quam id leo in vitae
              turpis massa sed.
            </p>{" "}
            <p>
              <li>
                Tincidunt lobortis feugiat vivamus at augue. Quis enim lobortis
                scelerisque fermentum dui faucibus in. Pulvinar pellentesque
                habitant morbi tristique senectus. Eleifend quam adipiscing
                vitae proin sagittis nisl rhoncus.
              </li>{" "}
              <li>
                Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Eget
                nunc lobortis mattis aliquam faucibus purus in massa tempor.
              </li>
              <li>
                Viverra mauris in aliquam sem fringilla ut morbi tincidunt
                augue. Sed sed risus pretium quam vulputate dignissim
                suspendisse in. Pharetra vel turpis nunc eget lorem dolor sed.
                Praesent semper feugiat nibh sed. Nisl purus in mollis nunc sed
                id.
              </li>{" "}
            </p>
            <p>
              Eget lorem dolor sed viverra ipsum. Placerat duis ultricies lacus
              sed turpis. Malesuada pellentesque elit eget gravida cum.
              Consequat id porta nibh venenatis cras. Pellentesque diam volutpat
              commodo sed egestas egestas fringilla. Adipiscing vitae proin
              sagittis nisl rhoncus mattis rhoncus urna neque. Ac tortor vitae
              purus faucibus. Eu scelerisque felis imperdiet proin fermentum leo
              vel orci porta. Nibh nisl condimentum id venenatis a condimentum
              vitae. Nec dui nunc mattis enim ut tellus. Commodo viverra
              maecenas accumsan lacus vel facilisis volutpat est. Risus feugiat
              in ante metus dictum at tempor commodo.
            </p>
            <blockquote>
              Neque vitae tempus quam pellentesque nec. Convallis tellus id
              interdum velit laoreet id. Faucibus interdum posuere lorem ipsum
              dolor. Interdum posuere lorem ipsum dolor sit. Elit duis tristique
              sollicitudin nibh sit amet. Cursus in hac habitasse platea
              dictumst quisque sagittis purus. Dictum at tempor commodo
              ullamcorper a lacus. Sed libero enim sed faucibus turpis in eu mi
              bibendum. Morbi non arcu risus quis varius.
            </blockquote>{" "}
            <p>
              Fames ac turpis egestas maecenas pharetra convallis posuere morbi.
              Nisl vel pretium lectus quam id. At consectetur lorem donec massa
              sapien. Adipiscing at in tellus integer feugiat scelerisque varius
              morbi enim. Curabitur vitae nunc sed velit dignissim. Donec ac
              odio tempor orci dapibus ultrices. Nec feugiat nisl pretium fusce.
              Lacus viverra vitae congue eu. Ante in nibh mauris cursus mattis
              molestie a iaculis. Pharetra massa massa ultricies mi quis
              hendrerit. Malesuada pellentesque elit eget gravida. Et egestas
              quis ipsum suspendisse ultrices gravida dictum fusce. Turpis
              egestas maecenas pharetra convallis posuere morbi leo urna. In
              pellentesque massa placerat duis ultricies lacus. Neque volutpat
              ac tincidunt vitae semper quis. Sed pulvinar proin gravida
              hendrerit.
            </p>
          </>
          <p>John Doe</p>
          <p>02/09/2023</p>
        </main>

        <Link href="/">
          <a className={styles.btn}>
            <span>Back To Home</span>
          </a>
        </Link>
      </div>
      <div className={styles["preview-container"]}>
        <BlogCard
          slug={"lorem-ipsum"}
          imageSrc="/largeorangesofaDone.jpg"
          title="Lorem Ipsum Dolor Sit Amet"
          blurb="Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua."
          author="John Doe"
          date="02/09/2023"
        />
        <BlogCard
          slug={"quis-varius"}
          imageSrc="/otherBlogs/livingroomDone.jpg"
          title="Quis Varius Quam Quisque"
          blurb="Sit amet aliquam id diam maecenas ultricies mi. Quis varius quam quisque id diam vel quam elementum pulvinar."
          author="John Doe"
          date="31/08/2023"
        />
        <BlogCard
          slug={"sapien-pellentesque"}
          imageSrc="/otherBlogs/sofaandbooksDone.jpg"
          title="Sapien Pellentesque Habitant"
          blurb="Sapien pellentesque habitant morbi tristique senectus et. Suscipit adipiscing bibendum est ultricies integer quis."
          author="John Doe"
          date="05/08/2023"
        />
      </div>
    </Layout>
  );
}
