import './App.css';

function HelloWorld(props) {
  console.log(props.name);
  return (
    <div>
      Hello {props.name}
    </div>
  );
}

export default HelloWorld;
