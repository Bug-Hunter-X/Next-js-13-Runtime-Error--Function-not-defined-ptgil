```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because the function is not defined
  const result = calculate(2,3);
  return (
    <div>
      <h1>About Page</h1>
      <p>The result is: {result}</p>
    </div>
  );
}

function calculate(a,b){
  return a + b; //This function is defined in the wrong scope causing a runtime error
}
```