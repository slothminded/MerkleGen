import Navbar from './Components/Navbar';
import {Utility,Clipboard} from './Components/Utility';
import ArrayBox from './Components/ArrayBox';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState, useEffect} from 'react';

function App() {

  const [addresses,setAddresses] = useState("");
  const [hash, setHash] = useState('');
  useEffect(() => {
    console.log(addresses);
  },[addresses]);

  return (
    <div className="App">
       <ToastContainer />
      <Navbar />
      <div className="container mx-auto  place-content-center content-bar justify-center items-center">
        <div class="flex fixed w-screen border-darkBG-200 px-2 sm:px-4 bg-darkSC text-darkText">

          <div class="flex-1 flex justify-center mr-auto ">

            <div className="flex items-center">
              <div class="grid grid-rows-2 grid-cols-1 grid-flow-col gap-20 justify-center items-center md:grid-rows-1 md:grid-cols-2 ">

                <div className='justify-center items-center'>

                  <ArrayBox setAddresses={setAddresses} />
                </div>

                <div>
                  <Utility addresses={addresses} setHash={setHash}/>
                  <Clipboard hash={hash} addresses={addresses} />
                </div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>
  );
}

export default App;
