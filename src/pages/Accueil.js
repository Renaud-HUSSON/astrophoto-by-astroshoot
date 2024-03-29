// Components
import AccueilText from "../components/Accueil/AccueilText";
import ImageCarousel from "../components/Accueil/ImageCarousel";
import CardCarousel from "../components/Accueil/CardCarousel";
import Loading from "../components/shared/Loading";
//Animation
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fade";
//Custom Hook to fetch data from an URL
import useFetchData from "../components/shared/Hooks/useFetchData";
import { Helmet } from "react-helmet-async";

const Accueil = () => {
  const categories = useFetchData(
    `${process.env.REACT_APP_URL}api/categories/read_image.php`
  );

  const carouselImages = useFetchData(
    `${process.env.REACT_APP_URL}api/carousel_images/read.php`
  );

  const fadeAnim = fadeIn();

  return (
    <motion.div
      variants={fadeAnim}
      animate="visible"
      initial="visible"
      exit="exit"
      className="accueil"
    >
      <Helmet>
        <title>Astrophoto by AstroShoot</title>
        <meta
          name="description"
          content="Site d'astrophotographie amateur présentant mes clichés et indiquant les caractéristiques de mes photos."
        />
      </Helmet>
      <div className="upper-content">
        <AccueilText />
        <motion.div
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
          initial={{ opacity: 0 }}
          className="image-carousel-container"
        >
          {!carouselImages[1] ? (
            <ImageCarousel images={carouselImages[0].data} />
          ) : (
            <Loading />
          )}
        </motion.div>
      </div>
      {!categories[1] ? (
        <CardCarousel
          cards={[
            categories[0].data.map((categorie) => {
              return {
                src: `https://astrophoto-amateur.com/${categorie.src.replace(
                  /^(.*)([.](jpg|gif|png))$/,
                  "$1-thumbnail$2"
                )}`,
                title: categorie.titre,
                content: `${categorie.titre} | ${categorie.number} photos`,
                nom: categorie.nom,
              };
            }),
          ]}
        />
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Accueil;
