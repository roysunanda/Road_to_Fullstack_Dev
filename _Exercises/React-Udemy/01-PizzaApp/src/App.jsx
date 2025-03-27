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
  console.log(props);
  return (
    <>
      <div className='pizza'>
        <img src={props.photoName} alt={props.photoName} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredient}</p>
          <span>${props.price}</span>
        </div>
      </div>
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
  return (
    <>
      <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza
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
        />
      </main>
    </>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert(`We're currently open!`);
  // else alert(`Sorry we're closed!`);
  // console.log(isOpen);

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}. We're currently open.
    </footer>
  );
}

export { App };
