import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#0057B7",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#FFCC00",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#cd0039",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#ffffff",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "#003b79",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 4 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
