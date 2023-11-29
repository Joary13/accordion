import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className='accordion'>
      {data.map((faq, i) => (
        <AccordionItem
          key={faq.title}
          num={i}
          title={faq.title}
          text={faq.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [appearence, setAppearence] = useState(false);

  function handdleToggle() {
    setAppearence((appearence) => !appearence);
  }

  return (
    <div className={`item ${appearence ? 'open' : ''}`}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon' onClick={handdleToggle}>
        {appearence ? '-' : '+'}
      </p>
      {appearence ? <div className='content-box'>{text}</div> : null}
    </div>
  );
}

export default App;
