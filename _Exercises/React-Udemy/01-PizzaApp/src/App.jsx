import { pizzaData } from "./data.js";

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Pizza(props) {
  // console.log(props);
  return (
    <>
      <li className='pizza'>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>${props.pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Header() {
  return (
    <>
      <header className='header'>
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzaData.length;
  return (
    <>
      <main className='menu'>
        <h2>Our Menu</h2>

        {numPizzas > 0 && (
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        )}
        {/* <Pizza
          name={pizzaData[0].name}
          ingredient={pizzaData[0].ingredients}
          photoName={pizzaData[0].photoName}
          price={pizzaData[0].price}
        />
        <Pizza
          name={pizzaData[1].name}
          ingredient={pizzaData[1].ingredients}
          photoName={pizzaData[1].photoName}
          price={pizzaData[1].price}
        /> */}
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert(`We're currently open!`);
  // else alert(`Sorry we're closed!`);
  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or Order online.</p>
          <button className='btn'>Order</button>
        </div>
      )}
    </footer>
  );
}

export { App };
