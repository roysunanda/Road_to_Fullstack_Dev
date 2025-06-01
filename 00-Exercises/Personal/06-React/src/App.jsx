// import { Hero } from "./components/Hero";
// import { HomeCards } from "./components/HomeCards";
// import { Navbar } from "./components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <HomeCards />
//       {/* <!-- Browse Jobs --> */}
//       <section className='bg-blue-50 px-4 py-10'>
//         <div className='container-xl lg:container m-auto'>
//           <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
//             Browse Jobs
//           </h2>
//           <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//             {/* <!-- Job Listing 1 --> */}
//             <div className='bg-white rounded-xl shadow-md relative'>
//               <div className='p-4'>
//                 <div className='mb-6'>
//                   <div className='text-gray-600 my-2'>Full-Time</div>
//                   <h3 className='text-xl font-bold'>Senior React Developer</h3>
//                 </div>

//                 <div className='mb-5'>
//                   We are seeking a talented Front-End Developer to join our team
//                   in Boston, MA. The ideal candidate will have strong skills in
//                   HTML, CSS, and JavaScript...
//                 </div>

//                 <h3 className='text-indigo-500 mb-2'>$70 - $80K / Year</h3>

//                 <div className='border border-gray-100 mb-5'></div>

//                 <div className='flex flex-col lg:flex-row justify-between mb-4'>
//                   <div className='text-orange-700 mb-3'>
//                     <i className='fa-solid fa-location-dot text-lg'></i>
//                     Boston, MA
//                   </div>
//                   <a
//                     href='job.html'
//                     className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- Job Listing 2 --> */}
//             <div className='bg-white rounded-xl shadow-md relative'>
//               <div className='p-4'>
//                 <div className='mb-6'>
//                   <div className='text-gray-600 my-2'>Remote</div>
//                   <h3 className='text-xl font-bold'>
//                     Front-End Engineer (React)
//                   </h3>
//                 </div>

//                 <div className='mb-5'>
//                   Join our team as a Front-End Developer in sunny Miami, FL. We
//                   are looking for a motivated individual with a passion...
//                 </div>

//                 <h3 className='text-indigo-500 mb-2'>$70K - $80K / Year</h3>

//                 <div className='border border-gray-100 mb-5'></div>

//                 <div className='flex flex-col lg:flex-row justify-between mb-4'>
//                   <div className='text-orange-700 mb-3'>
//                     <i className='fa-solid fa-location-dot text-lg'></i>
//                     Miami, FL
//                   </div>
//                   <a
//                     href='job.html'
//                     className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- Job Listing 3 --> */}
//             <div className='bg-white rounded-xl shadow-md relative'>
//               <div className='p-4'>
//                 <div className='mb-6'>
//                   <div className='text-gray-600 my-2'>Remote</div>
//                   <h3 className='text-xl font-bold'>React.js Developer</h3>
//                 </div>

//                 <div className='mb-5'>
//                   Are you passionate about front-end development? Join our team
//                   in vibrant Brooklyn, NY, and work on exciting projects that
//                   make a difference...
//                 </div>

//                 <h3 className='text-indigo-500 mb-2'>$70K - $80K / Year</h3>

//                 <div className='border border-gray-100 mb-5'></div>

//                 <div className='flex flex-col lg:flex-row justify-between mb-4'>
//                   <div className='text-orange-700 mb-3'>
//                     <i className='fa-solid fa-location-dot text-lg'></i>
//                     Brooklyn, NY
//                   </div>
//                   <a
//                     href='job.html'
//                     className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'>
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='m-auto max-w-lg my-10 px-6'>
//         <a
//           href='jobs.html'
//           className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>
//           View All Jobs
//         </a>
//       </section>
//     </>
//   );
// }

// export default App;

import { Header } from "./components/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { TabButton } from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <CoreConcept key={item.title} {...item} />;
            })}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export { App };
