import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
import { userContext } from './context/userContext';
import { connectingWithContract, connectWallet } from './utils/wallet';

function App() {
  const [account, setAccount] = useState('');
  const [error, setError] = useState("");
  const [contract, setContract] = useState(null);

  const fetchData = async () => {
    try {
        // Get Contract
        const contract = await connectingWithContract();
        setContract(contract);
        console.log(contract);
        // Get account
        const connectAccount = await connectWallet();
        setAccount(connectAccount);
        console.log(connectAccount);
    }
    catch (err) {
        setError("Please install and connect your wallet");
    }
  }

  // Detect change in Metamask account
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  });

  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div className="App">
      {/* Sending value using React Contexts */}
      <userContext.Provider value={{account,error,setAccount,setError,contract,setContract}}>
        <Navbar/>
        <Tasks />
        {/* <InputForm /> */}
        {error && <p style={{color: "red"}}>{error}</p>}
      </userContext.Provider>
    </div>
  );
}

export default App;
