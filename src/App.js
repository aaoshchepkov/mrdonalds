import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyAz0O0PwmnpGkXTnGybp39cubmaa7anjcE",
  authDomain: "mrdonald-30870.firebaseapp.com",
  projectId: "mrdonald-30870",
  storageBucket: "mrdonald-30870.appspot.com",
  messagingSenderId: "873621563165",
  appId: "1:873621563165:web:87aab3e5aa99ae447463f4"
};

firebase.initializeApp(firebaseConfig);


function App() {
 
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  
  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order{...orders} {...openItem}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
   </>
  );
}

export default App;
