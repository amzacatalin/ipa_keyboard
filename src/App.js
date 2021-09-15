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

  const onClicked = (letterIndex, index) => () => {
    const currentRef = itemsRef.current[letterIndex][index];
    console.log(currentRef.current.value);
  };

  return (
    <>
      {templateKeys.map((el, letterIndex) => (
        <div key={letterIndex}>
          <p>{el.letter}</p>
          {el.chars.map((char, index) => (
            <input
              key={index}
              ref={itemsRef.current[letterIndex][index]}
              defaultValue={char}
              onClick={onClicked(letterIndex, index)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
