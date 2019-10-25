import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'Description: War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: 'Price: 100',
  },
  {
    item: 'Emergency Bubble',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobrIlVpwQ2VWfFDIx1x3fOFv5qETezgq2o20xDoS5_-QaQtz5NA&s',
    description:'Description: Emergency Bubble deals with accidents during the journey in universe, protecting people from cosmic radiation and offering oxygen and gaseous food.',
    price:'Price: 1200',
  },
  {
     item:'Coupon of Tourguide on Mars',
     image:'https://www.toursbylocals.com/images/guides/17/17389/201985144552330.jpg',
     description:'Description: Buy a coupon of a tourguide booking on Mars and enjoy your journey!',
     price:'Price: 180',
  },
]

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm/>
     <div className="cart">
     {shoppingCartItems.map(makeProduct)}
     </div>
    </div>
  );
}

function makeProduct(data) {
  console.log(data);
  return(
    
      <Product item={data.item} image={data.image} description={data.description} price={data.price}/>
  );
}

function Product(props) {
  return(
    <div className="product">
      <div className="item">{props.item}</div>
      <div className="image">
      <img src={props.image} width="100"/> </div>
      <div className="description">
      <p>{props.description}</p></div>
      <div className="price">
      <p>{props.price}</p>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
