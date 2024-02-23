import './ProductCard.style.css'

const ProductCard = ({
  img,
  title,
  price,
  description,
  hasDiscount = false,
}) => {
  return (
    <div className='card'>
      <img className='cardImg'
        width={250}
        src={img}
        alt=""
      />
      <h3 className='cardTitle'>{title} {hasDiscount ? <span>Big sale</span> : null} </h3>
      <h4 className='cardPrice'>Price: ${price}</h4>
      <p className='cardDescription'>{description}</p>
      <div className='cardBtnWrapper'>
        <button className='cardAddToCardBtn' type='button'>Add to card</button>
        <button className='cardSmileBtn' type='button'>😀</button>
      </div>
    </div>
  );
};

export default ProductCard;