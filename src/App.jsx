import ProductCard from './components/ProductCard';
import './App.css'

const ProductData = [
  {
  id: "1_product",
  title: "Taco Black",
  price: 10.99,
  hasDiscount: true,
  description: " Lorem ",
},
  {
    id: "2_product",
    title: "Taco Black",
    price: 10.99,
    description: " Lorem ",
  },
  {
    id: "3_product",
    title:"Taco Black",
    price: 10.99,
    description: " Lorem ",
  },
  {
    id: "4_product",
    title: "Taco Black",
    price: 10.99,
    hasDiscount: true,
    description: " Lorem ",
}]


function App() {
  return <div>
    {ProductData.map(item => {
      return <ProductCard
        key={item.id}
      title={item.title}
      price={item.price}
      hasDiscount={item.hasDiscount}
      description={item.description}
    />
    })}
  
  </div>;
}

export default App;
