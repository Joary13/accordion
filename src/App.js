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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion'>
      {data.map((faq, i) => (
        <AccordionItem
          key={faq.title}
          num={i}
          title={faq.title}
          curOpen={curOpen}
          onCurOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onCurOpen, children }) {
  const isOpen = curOpen === num;

  function handdleCurOpen(id) {
    onCurOpen(isOpen ? null : id);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon' onClick={() => handdleCurOpen(num)}>
        {isOpen ? '-' : '+'}
      </p>
      {num === curOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}

export default App;
