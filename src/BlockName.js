import './App.css';

function BlockName(props) {
  console.log(props.name);
  return (
    <h2 className="title-font font-medium text-lg text-gray-900">{props.name}</h2>
  );
}

export default BlockName;
