import { initialItems } from "./data";

function Logo() {
  return <h1>🏖️ Far Away 💼</h1>;
}

function Form() {
  return (
    <form className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type='text' placeholder='Item...' />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className='stats'>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export function App() {
  return (
    <>
      <div className='app'>
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}
