
import './App.css'
import Container from './components/container';
import Flex from './components/Flex'
import { ImAirplane, ImFacebook2  } from "react-icons/im";
import { DiAndroid } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import Image from './components/image';

function App() {


  return (
    <>

      <Container>
        <Flex className={`justify-between`}>
          <div className="w-200  bg-amber-600">
            <DiJsBadge className={`text-5xl`} />
          </div>
          <div className="w-40 h-40  bg-amber-300 ">
            <ImAirplane className={`text-white text-3xl `} />
             <ImFacebook2 className={`text-white text-4xl `} />
               <DiAndroid className={`text-white text-5xl `} />
          </div>
    
        </Flex>
       
      </Container>
     
    </>
  );
}

export default App;
