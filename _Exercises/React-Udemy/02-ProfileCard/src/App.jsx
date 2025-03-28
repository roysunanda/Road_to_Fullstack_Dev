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
      <div>
        <h1>SANDY</h1>
        <p>Web Developer & AI Enthusiast.</p>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <>
      <div className='skill-list'>
        <Skill skill='React' emoji='⚛️' color='#ef476f' />
        <Skill skill='Node' emoji='🌐' color='#ffd166' />
        <Skill skill='JS' emoji='⌨️' color='#06d6a0' />
        <Skill skill='Python' emoji='🐍' color='#118ab2' />
        <Skill skill='MongoDB' emoji='🎈' color='#d9d9d9' />
      </div>
    </>
  );
}

function Skill(props) {
  return (
    <>
      <div className='skill' style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    </>
  );
}

export { App };
