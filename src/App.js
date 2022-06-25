import './App.css';
import Block from './Block';
import HelloWorld from './HelloWorld';
import BlockName from './BlockName';
import GoodRussianCounter from './GoodRussianCounter';
import MoneyCounter from './MoneyCounter';
import Example from './Example';

function App() {
  return (
    <div className="App">
      {/* <Example /> 
      <Example id={"example-1"}/> 
      <Example id={"example-1"} name={"Azazaa"}/> 
      <Example age={"sss"}/>  */}

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">       
      <Block name={"Max Parfenyuk"} jobTitile={"PM"}></Block>
      <Block name={"Diz"} jobTitile={"Diz"}></Block>
      <Block name={"Vovan Vuchkan"} jobTitile={"Soft Dev"}></Block>
      <Block name={"Rostik"} jobTitile={"Bariga"}></Block>
    </div>
  </div>
</section>
      {/* <HelloWorld name={"Diz"}></HelloWorld>
      <BlockName name={"Max Parfenyuk"}></BlockName> */}
      <GoodRussianCounter/>
      <MoneyCounter amount={10}/>
      <MoneyCounter/>
    </div>
  );
}

export default App;
