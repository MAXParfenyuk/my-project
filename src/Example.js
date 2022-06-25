import {useEffect} from 'react'

function Example({name, amount}) {
    useEffect(()=>{
        console.log(name);
    }, [])

  return (
    <div>
        <p >Example component {name}</p>
    </div>
  );
}

export default Example;

