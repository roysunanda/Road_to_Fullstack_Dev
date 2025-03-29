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

function Pizza({ pizzaObj }) {
  // console.log(props);
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
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
  // const numPizzas = [];
  return (
    <>
      <main className='menu'>
        <h2>Our Menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className='pizzas'>
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later. 😊</p>
        )}
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert(`We're currently open!`);
  // else alert(`Sorry we're closed!`);
  // console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00 😊
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or Order online.</p>
      <button className='btn'>Order</button>
    </div>
  );
}

export { App };
