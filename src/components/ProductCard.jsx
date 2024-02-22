
function ProductCard({ img, title , price , description , hasDiscount = false}) {
  return (
      <div>
          <img 
              width={250} 
              src={img}
              alt=""
          />
          <h3>{title} {hasDiscount ? <span>Big sale</span> : null} </h3>
          <h4>Price: ${price}</h4>
          <p>{description}</p>
          <button type='button'>Add to card</button>
          <button type='button'>😀</button>
    </div>
  )
}

export default ProductCard