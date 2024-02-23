
import css from './ProductCard.module.css';

const ProductCard = ({
  img,
  title,
  price,
  description,
  
  hasDiscount = false,
  promotional = false,
}) => {
  const classes = [css.card, promotional ? css.cardPromotional : ""];
  return (
    <div className={classes.join("")}>
      <img className={css.cardImg}
        width={250}
        src={img}
        alt=""
      />
      <h3 className={css.cardTitle}>{title} {hasDiscount ? <span>Big sale</span> : null} </h3>
      <p className={css.cardDescription}>Item left:</p>
      <h4 className={css.cardPrice}>Price: ${price}</h4>
      <p className={css.cardDescription}>{description}</p>
      <div className={css.cardBtnWrapper}>
        <button className={css.cardAddToCardBtn} type='button'>Add to card</button>
        <button className={css.cardSmileBtn} type='button'>😀</button>
      </div>
    </div>
  );
};

export default ProductCard;