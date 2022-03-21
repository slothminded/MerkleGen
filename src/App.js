import Navbar from './Components/Navbar';
import { Utility, Clipboard } from './Components/Utility';
import ArrayBox from './Components/ArrayBox';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

function App() {

  const [addresses, setAddresses] = useState("");
  const [hash, setHash] = useState('');
  useEffect(() => {
    console.log(addresses);
  }, [addresses]);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div class="flex flex-row min-h-screen justify-center items-center content-bar">
        <div class="grid grid-rows-2 grid-cols-1 grid-flow-col gap-20  items-center md:grid-rows-1 md:grid-cols-2 ">

          <div className=''>

            <ArrayBox setAddresses={setAddresses} />
          </div>

          <div>
            <Utility addresses={addresses} setHash={setHash} />
            <Clipboard hash={hash} addresses={addresses} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
