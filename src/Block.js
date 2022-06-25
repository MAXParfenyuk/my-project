import './App.css';
import BlockName from './BlockName';

function Block(props) {
  console.log(props.block);
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"></img>
          <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{props.name}</h2>
            <h3 className="text-gray-500 mb-3">{props.jobTitile}</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          </div>
        </div>
      </div>
  );
}

export default Block;

