import AccueilText from '../components/Accueil/AccueilText'
import image1 from '../images/nebuleuses/NGC6992-30-05-2020.jpg'
import image2 from '../images/nebuleuses/NGC6992-22-05-2020.jpg'
import image3 from '../images/nebuleuses/M8_Lagoon_Nebula.png'
import ImageCarousel from '../components/Accueil/ImageCarousel'
import CardCarousel from '../components/Accueil/CardCarousel'

const Accueil = () => {
  let imagev1 = {title: "Nébuleuse 1", src:image1}
  let imagev2 = {title: "Nébuleuse 2", src:image2}
  let imagev3 = {title: "Nébuleuse 3", src:image3}
  const images = [imagev1, imagev2, imagev3]

  return <div className="accueil">
    <div className="upper-content">
      <AccueilText />
      <div className="image-carousel-container">
        <ImageCarousel images={images}/>
      </div>
    </div>
    <CardCarousel cards={[
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev2.src, title:imagev2.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev3.src, title:imagev3.title, content:"Les Nébuleuses | 28 photos"},
      {src:imagev1.src, title:imagev1.title, content:"Les Nébuleuses | 28 photos"},
    ]}/>
  </div>
}

export default Accueil