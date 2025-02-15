// App.js
import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';
import coverImage from './cover.jpg'; // Ensure you have a cover.jpg in your src folder

const PageCover = React.forwardRef((props, ref) => (
  <div className="page page-cover" ref={ref} data-density="hard">
    <img src={coverImage} alt="Book Cover" className="cover-image" />
  </div>
));

const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
    <h2 className="page-header">{props.header}</h2>
    <div className="page-content">
      <p>{props.children}</p>
    </div>
    <div className="page-footer">Desk's Book</div>
  </div>
));

function App() {
  const book = useRef();

  const nextButtonClick = () => {
    book.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <div className="container">
      <button className="prev-button" onClick={prevButtonClick}>&#8592;</button>
      <HTMLFlipBook
        width={800}
        height={1000}
        minWidth={315}
        maxWidth={2000}
        minHeight={420}
        maxHeight={2700}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flip-book"
        ref={book}
      >
        <PageCover />
        <Page header="Chapter 1: The Mysterious Forest">
          In the heart of an ancient land, there existed a forest shrouded in mystery. Legends spoke of its ever-changing paths and the creatures that guarded its secrets...
        </Page>
        <Page header="Chapter 2: The Lost Traveler">
          Eleanor, a seasoned explorer, had heard tales of the forest's enigma. Determined to uncover its truths, she embarked on a journey, leaving behind the comforts of her village...
        </Page>
        <Page header="Chapter 3: The Enchanted Clearing">
          As she ventured deeper, Eleanor stumbled upon a clearing where the air shimmered with magic. In its center stood an ancient tree with inscriptions glowing faintly...
        </Page>
        {/* Add more pages as needed */}
      </HTMLFlipBook>
      <button className="next-button" onClick={nextButtonClick}>&#8594;</button>
    </div>
  );
}

export default App;
