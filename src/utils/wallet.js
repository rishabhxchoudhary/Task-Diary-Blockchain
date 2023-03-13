import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { contractAddress, contractABI } from "./constants";

export const checkIfWalletIsConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (err) {
        console.log(err)
    }
}

export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchContract = (signerOrProvider) => new ethers.Contract(contractAddress, contractABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connctions = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connctions);
        const signer = provider.getSigner();
        const contract = fetchContract(signer); 
        return contract;
    }
    catch (err) {
        console.log(err);
    }
}