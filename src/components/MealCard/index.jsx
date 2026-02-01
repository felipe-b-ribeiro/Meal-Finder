import { useContext, useState } from "react";
import { SC_Card } from "./styles";
import { StyleContext } from "../../contexts/StyleContext";
import { IoSearchCircle } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Overlay from '../../components/Overlay';

const Index = ({ strMeal, strMealThumb }) => {
  const { style } = useContext(StyleContext);
  const [imgPreview, setImgPreview] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleSpeech = (texto) => {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "en-US";
    utterance.rate = 1.5;
    utterance.pitch = 1.5;
    speechSynthesis.speak(utterance);
  };

  const handleClose = () => {
    setImgPreview(false);
    setZoom(false);
  };

  const previewClass = imgPreview ? "preview-img" : "normal-img";
  const zoomClass = zoom ? "zoom" : "";
  const wrapperClass = imgPreview ? "img-wrapper" : "";
  const isMobile = window.innerWidth <= 768;

  return (
    <SC_Card
      zoom={zoom}
      preview={imgPreview}
      color={style.color}
      corner={style.corner}
    >
      <div className={`${wrapperClass} hfit wfit`}>
        <div className="prel wfit hfit">
          <img
            className={`${previewClass} ${zoomClass}`}
            onClick={
              imgPreview ? () => setZoom(!zoom) : () => setImgPreview(true)
            }
            src={strMealThumb}
            alt={strMeal}
            title={strMeal}
          />
          {imgPreview && (
            <button onClick={handleClose} className="close-preview">
              <IoMdClose size={20} color="white" />
            </button>
          )}
          {!imgPreview && (
            <button className="sound-btn" onClick={() => handleSpeech(strMeal)}>
              <AiFillSound size={isMobile ? 15 : 20} color="white" />
            </button>
          )}
        </div>
      </div>
      <Overlay onClick={handleClose} preview={imgPreview} />
      <div className="meal-text-wrapper">
        <h5>{strMeal}</h5>
        <a
          onClick={(e) => e.stopPropagation()}
          href={`https://google.com/search?q=${encodeURIComponent(strMeal + " Recipe")}`}
          target="blank"
        >
          <IoSearchCircle size={25} color="white" />
          <span>See Recipe</span>
        </a>
      </div>
    </SC_Card>
  );
};

export default Index;
