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

function Pizza() {
  return (
    <>
      <img src={pizzaData[0].photoName} alt={pizzaData[0].photoName} />
      <h3>{pizzaData[0].name}</h3>
      <p>{pizzaData[0].ingredients}</p>
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
        <Pizza />
        <Pizza />
        <Pizza />
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
      {new Date().toLocaleTimeString()}. We're currently open.
    </footer>
  );
}

export { App };
