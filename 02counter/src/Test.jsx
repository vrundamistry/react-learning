import { useState } from 'react';

function Greeting({ name }) {          // name is a prop
  const [times, setTimes] = useState(0); // times is state

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You greeted {times} times.</p>
      <button onClick={() => setTimes(times + 1)}>
        Greet again
      </button>
    </div>
  );
}

export default Greeting;