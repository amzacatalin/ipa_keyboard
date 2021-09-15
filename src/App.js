import { useRef, createRef } from 'react';
import { templateKeys } from './data';

function App() {
  const refObject = templateKeys.reduce((res, _, letterIndex) => {
    res[letterIndex] = [];
    return res;
  }, {});

  const itemsRef = useRef(refObject);

  templateKeys.forEach((el, letterIndex) => {
    el.chars.forEach(() => itemsRef.current[letterIndex].push(createRef()))
  });

  const onClicked = (letterIndex, charIndex) => () => {
    const currentRef = itemsRef.current[letterIndex][charIndex];
    const value = currentRef.current.value;
    console.log(value);
  };

  return (
    <>
      {templateKeys.map((el, letterIndex) => (
        <div key={letterIndex}>
          <p>{el.letter}</p>
          {el.chars.map((char, charIndex) => (
            <input
              key={charIndex}
              ref={itemsRef.current[letterIndex][charIndex]}
              defaultValue={char}
              onClick={onClicked(letterIndex, charIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
