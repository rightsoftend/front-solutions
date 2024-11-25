type Item = {
  title: string;
  description: string;
}

const Accordeon = ({name, items}: {name: string; items: Item[];}) => {
  return (
    <>
      {items.map((item: Item, index) => (
        <details key={index} name={name}>
          <summary>{item.title}</summary>
          <p>{item.description}</p>
        </details>
      ))}
    </>
  );
}

export default Accordeon;