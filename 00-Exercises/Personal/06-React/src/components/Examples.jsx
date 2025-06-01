import { useState } from "react";
import { TabButton } from "./TabButton.jsx";
import { Section } from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import { Tabs } from "./Tabs.jsx";

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  // console.log(selectedButton);
  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttonContainer='menu'
        buttons={
          <>
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
          </>
        }>
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
      </Tabs>
    </Section>
  );
};
