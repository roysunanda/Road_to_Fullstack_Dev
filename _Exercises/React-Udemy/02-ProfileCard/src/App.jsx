import myImg from "./assets/my-img.jpg";

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return (
    <>
      <img className='avatar' src={myImg} alt='sandy' />
    </>
  );
}

function Intro() {
  return (
    <>
      <h1>SANDY</h1>
      <p>description.</p>
    </>
  );
}

function SkillList() {
  return (
    <>
      <Skill />
      <Skill />
      <Skill />
    </>
  );
}

function Skill() {
  return (
    <>
      <p>Skill</p>
    </>
  );
}

export { App };
