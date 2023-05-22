// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import DropDown from "./components/DropDown";

import Translate from "./components/Translate";

// const mainItems = [
//   {
//     title: "What is React",
//     content:
//       "React is a javascript Framwork for better UI, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  ",
//   },
//   {
//     title: "How does React Work's",
//     content:
//       "React work's through React library, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
//   },

//   {
//     title: "What is the major benefit of using React",
//     content: "React is faster and gives better User Interface",
//   },
// ];

// const options = [
//   {
//     label: "Color Red",
//     value: "Red",
//   },

//   {
//     label: "Color Blue",
//     value: "Blue",
//   },

//   {
//     label: "Shade Of Green",
//     value: "Green",
//   },
// ];

const App = () => {
  /*
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  */

  return (
    <div>
      <Translate />

      {/* <Accordion items={mainItems} /> */}
      {/* <Search /> */}

      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle DropDown
      </button> */}

      {/* {showDropDown ? (
        <DropDown
          selected={selected}
          onSetChange={setSelected}
          options={options}
        />
      ) : null} */}
    </div>
  );
};

export default App;
