import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const mainItems = [
  {
    title: "What is React",
    content:
      "React is a javascript Framwork for better UI, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  ",
  },
  {
    title: "How does React Work's",
    content:
      "React work's through React library, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },

  {
    title: "What is the major benefit of using React",
    content: "React is faster and gives better User Interface",
  },
];

const options = [
  {
    label: "Color Red",
    value: "Red",
  },

  {
    label: "Color Blue",
    value: "Blue",
  },

  {
    label: "Shade Of Green",
    value: "Green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={mainItems} />
      </Route>

      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/dropdown"}>
        <DropDown
          label={"Select a Color"}
          onSetChange={setSelected}
          options={options}
          selected={selected}
        />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>

      {/* {showAccordion()}
      {showLists()}
      {showTranslate()}
      {showDropdown()} */}
    </div>
  );
};

export default App;
