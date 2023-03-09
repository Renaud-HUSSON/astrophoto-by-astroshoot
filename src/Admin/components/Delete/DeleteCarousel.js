import { Link } from "react-router-dom";
import useFetchData from "../../../components/shared/Hooks/useFetchData";
import Loading from "../../../components/shared/Loading";
import SubmitDeleteButton from "../../../components/shared/Forms/SubmitDeleteButton";

const DeleteCarousel = ({ section, id }) => {
  const carouselData = useFetchData(
    `${process.env.REACT_APP_URL}/api/${section}/read_single.php?id=${id}`
  );
  const carousel = !carouselData[1] ? carouselData[0].data[0] : "";

  return !carouselData[1] ? (
    <>
      <div className="delete-form">
        <p className="delete">
          Vouez vous vraiment supprimer l'image du carousel suivante?
        </p>
        <p>{carousel.titre}</p>
        <img
          src={`https://astrophoto-amateur.com/${carousel.src}`}
          alt={carousel.titre}
        />
        <div className="action-buttons">
          <Link to={`/admin/${section}`}>
            <button className="cancel-delete">Annuler</button>
          </Link>
          <SubmitDeleteButton section={section} id={id} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default DeleteCarousel;
