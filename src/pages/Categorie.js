//Components
import ImageContainer from "../components/Categorie/ImageContainer";
import Loading from "../components/shared/Loading";
//Animations
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fade";
//Custom Hook to fetch data from an URL
import useFetchData from "../components/shared/Hooks/useFetchData";
//React Helmet
import { Helmet } from "react-helmet-async";

const Categorie = ({ categorie, title }) => {
  const fadeAnim = fadeIn();

  const images = useFetchData(
    `${process.env.REACT_APP_URL}api/images/read_category.php?category=${categorie}`
  );

  return !images[1] ? (
    <motion.div
      variants={fadeAnim}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="categorie-container"
    >
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`Page présentant mes photo de la catégorie suivante: ${title}`}
        />
      </Helmet>
      <h1>{title}</h1>
      <div className="categorie-images">
        {!images[1] ? (
          images[0].data.map((image) => {
            const src = image.src.replace(
              /^(.*)([.](jpg|jpeg|png))$/,
              "$1-thumbnail$2"
            );

            return (
              <ImageContainer
                key={image.id}
                categorie={image.categorie}
                id={image.id}
                title={image.titre}
                src={`https://astrophoto-amateur.com/${src}`}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </motion.div>
  ) : (
    <Loading />
  );
};

export default Categorie;
