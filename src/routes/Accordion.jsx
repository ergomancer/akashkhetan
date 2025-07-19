import { useState } from "react";

const DefaultIcon = function ({ style }) {
  return (
    <div className="icon" style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1"
        >
          <path
            fill="currentColor"
            fill-opacity="0"
            stroke-dasharray="28"
            stroke-dashoffset="28"
            d="M12 10l4 7h-8Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.7s"
              dur="0.5s"
              values="0;1"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="28;0"
            />
          </path>
          <path d="M12 10l4 7h-8Z" opacity="0">
            <animate
              attributeName="d"
              begin="0.4s"
              dur="0.8s"
              keyTimes="0;0.25;1"
              repeatCount="indefinite"
              values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"
            />
            <animate
              attributeName="opacity"
              begin="0.4s"
              dur="0.8s"
              keyTimes="0;0.1;0.75;1"
              repeatCount="indefinite"
              values="0;1;1;0"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

const Line = function () {
  return (
    <svg
      className="line"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 100"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" />
    </svg>
  );
};

const defaultEntries = [
  {
    closed: () => <p>Entry Head</p>,
    open: () => <p>This is the entry.</p>,
  },
  {
    closed: () => <p>Entry Head II</p>,
    open: () => <p>This is the entry.</p>,
  },
  {
    closed: () => <p>Entry Head III</p>,
    open: () => <p>This is the entry.</p>,
  },
];

export const Accordion = function ({
  name = "accordion",
  entries = defaultEntries,
  Icon = DefaultIcon,
}) {
  return (
    <div id={name}>
      {entries.map((entry, index) => {
        const [itemState, setItemState] = useState("closed");
        let EntryClosed = entry["closed"];
        let EntryOpen = entry["open"];
        return (
          <div
            className={name.concat("Item")}
            id={name.concat("Item", index)}
            key={index}
          >
            <button
              className={name.concat("ItemClosed")}
              id={name.concat("ItemClosed", index)}
              onClick={() =>
                setItemState(itemState == "open" ? "closed" : "open")
              }
            >
              <div className={name.concat("ItemMarkline")}>
                <Line />
                <Icon
                  style={{
                    transform:
                      itemState == "open" ? "rotate(180deg)" : "rotate(90deg)",
                  }}
                />
                <Line />
              </div>
              <EntryClosed />
            </button>
            <div
              className={name.concat("ItemOpen")}
              id={name.concat("ItemOpen", index)}
              style={{
                overflow: "hidden",
                height: itemState == "open" ? "auto" : "0",
              }}
            >
              <div className={name.concat("ItemMarkline")}>
                <Line />
              </div>
              <EntryOpen />
            </div>
          </div>
        );
      })}
    </div>
  );
};
