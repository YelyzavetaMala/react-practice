import ProductCard from './components/ProductCard/ProductCard';
import './App.css'

const ProductData = [
  {
  id: "1_product",
  title: "Taco Black",
  img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    price: 10.99,
    quantity: 4,
  hasDiscount: true,
  description: " Tacos are a beloved Mexican dish enjoyed worldwide for their versatility and delicious flavors.These handheld treats typically consist of a corn or flour tortilla filled with a variety of ingredients such as seasoned meat, vegetables, cheese, and salsa ",
},
  {
    id: "2_product",
    title: "Taco Black",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    price: 10.99,
    quantity: 7,
    description: " Tacos are a beloved Mexican dish enjoyed worldwide for their versatility and delicious flavors.These handheld treats typically consist of a corn or flour tortilla filled with a variety of ingredients such as seasoned meat, vegetables, cheese, and salsa ",
  },
  {
    id: "3_product",
    title: "Taco Black",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    price: 10.99,
    quantity: 2,
    description: " Tacos are a beloved Mexican dish enjoyed worldwide for their versatility and delicious flavors.These handheld treats typically consist of a corn or flour tortilla filled with a variety of ingredients such as seasoned meat, vegetables, cheese, and salsa",
  },
  {
    id: "4_product",
    title: "Taco Black",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    price: 10.99,
    quantity: 1,
    hasDiscount: true,
    description: " Tacos are a beloved Mexican dish enjoyed worldwide for their versatility and delicious flavors.These handheld treats typically consist of a corn or flour tortilla filled with a variety of ingredients such as seasoned meat, vegetables, cheese, and salsa",
}]


function App() {
  return <div>
    {ProductData.map(item => {
      const isPromotional = item.quantity <= 2;
      return (
        <ProductCard
          key={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          hasDiscount={item.hasDiscount}
          quantity={item.quantity}
          description={item.description}
          promotional={isPromotional}
      />
      );
    })}
  </div>;
}

export default App;
