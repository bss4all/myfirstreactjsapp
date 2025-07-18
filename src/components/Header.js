import React, { useState, useEffect } from 'react';


function Header() {
  const [count, setCount] = useState(0);
  useEffect(() => {
	console.log("Component rendered successfully");
  }, []);
  return (
    <div>
        <h1>Welcome to the Header</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>You clicked {count} times</p>
    </div>
  )
}

export default Header;
