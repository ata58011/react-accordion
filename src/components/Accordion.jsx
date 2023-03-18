import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setselected] = useState(null);
  const data = [
    {
      question: "Question 1",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    },
    {
      question: "Question 2",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ').",
    },
    {
      question: "Question 3",
      answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. . `,
    },
    {
      question: "Question 4",
      answer: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  ];
  const toggle = (id) => {
    if (selected === id) {
      return setselected(null);
    }
    setselected(id);
  };
  return (
    <>
      {data.map((item, id) => (
        <>
          <div className="accordion">
            <div className="item">
              <div className="title" onClick={() => toggle(id)}>
                <h2>{item.question}</h2>
                <span>{selected === id ? "-" : "+"}</span>
              </div>
              <div className={selected === id ? "content-show" : "content"}>
                {item.answer}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Accordion;
