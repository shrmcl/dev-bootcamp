// LET'S UNDERSTAND THE DIFFERENCE FUNCTION EQUALITY

function factory() {
    return (a, b) => a + b;
  }
  
  const fn1 = factory();
  const fn2 = factory();
  
  // these have 
  //    -- same results
  //    -- same code
  console.log(fn1(1, 2));
  console.log(fn2(1, 2));
  
  // HOWEVER
  //    -- not the same function object
  console.log(fn1 === fn2); // => false
  console.log(fn1 === fn1); // => true

  

// EXAMPLE OF A GOOD USE CASE
// WHAT IF
//   -- this list was very large
//   -- it would get rebuilt on every render
//   -- the function MyBigList is called every time the state or props change
//   -- re-rending happens very very often, as the state changes
import useSearch from './fetch-items';

function MyBigList({ term, onItemClick }) {
  const items = useSearch(term);

  const map = item => <div onClick={onItemClick}>{item}</div>;

  return <div>{items.map(map)}</div>;
}

export default React.memo(MyBigList);