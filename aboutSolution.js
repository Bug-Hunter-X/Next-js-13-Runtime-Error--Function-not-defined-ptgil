```javascript
// pages/about.js

function calculate(a,b){
  return a + b;
}
export default function About() {
  const result = calculate(2,3);
  return (
    <div>
      <h1>About Page</h1>
      <p>The result is: {result}</p>
    </div>
  );
}
```