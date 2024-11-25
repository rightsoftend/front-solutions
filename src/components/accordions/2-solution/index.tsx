import { Item } from "../IItem";
import "./style.css";

const Accordion = ({ name, items }: { name: string; items: Item[] }) => {
  return (
    <>
      {items.map((item: Item, index) => (
        <div className="accordion" key={index}>
          <details name={name} className="accordion__details">
            <summary className="accordion__summary">
              <span
                className="accordion__title"
                role="term"
                aria-details={`faq-${index}`}
              >
                {item.title}
              </span>
            </summary>
            <div className="accordion__content" id={`faq-${index}`} role="definition">
              <div className="accordion__content-body">
                <p>{item.description}</p>
              </div>
            </div>
          </details>
        </div>
      ))}
    </>
  );
};

export default Accordion;
