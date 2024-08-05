import React from "react";
import sound from "../assets/sound_max_fill.svg";
import copy from "../assets/Copy.svg";
import sort from "../assets/Sort_alfa.svg";

function Tabs() {
  const [active, setActive] = React.useState("");
  const [characters, setCharacters] = React.useState(0);

  const tabs = [
    {
      id: "tab-1",
      title: "Tab 1",
    },
    {
      id: "tab-2",
      title: "Tab 2",
    },
    {
      id: "tab-3",
      title: "Tab 3",
    },
  ];

  const charactersCount = (event) => {
    const numOfCharacters = event.target.value.length;
    setCharacters(numOfCharacters);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(characters);
  };

  return (
    <div className="border border-[#4D5463] rounded-lg bg-[#202530] p-6 w-1/2 mt-6">
      <div>
        <ul className="list-none flex justify-between border-b-2 pb-3 border-[#394151]">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer ${
                tab.id === active ? "bg-[#4D5463] text-[#FFFFFF]" : "text-[#6C7381]"
              } px-4 py-2 hover:bg-[#4D5463] hover:text-[#FFFFFF] rounded-lg font-semibold`}
              onClick={() => setActive(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      <div id="content-tabs">
        <div id="content-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="sentence"
              className="bg-inherit w-full border-0 focus:outline-none focus:ring-0 p-2 mt-1 text-md font-semibold"
              maxLength={500}
              onChange={charactersCount}
            />

            <p className="text-end text-[#6C7381] font-semibold text-sm mb-2">
                {characters}/500
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img
                  src={sound}
                  alt="sound-logo"
                  className="border-2 p-2 border-[#4C5563] rounded-lg cursor-pointer"
                />
                <img
                  src={copy}
                  alt="copy-logo"
                  className="border-2 p-2 border-[#4C5563] rounded-lg cursor-pointer"
                />
              </div>
              <div className="relative">
                <img src={sort} alt="sort" className="absolute top-2 left-2" />
                <button className="px-8 py-2 bg-[#3763E5] rounded-lg border">
                  Translate
                </button>
              </div>
            </div>
          </form>
        </div>

        <div id="content-2">
          <p>Content 2</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
