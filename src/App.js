import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyAz0O0PwmnpGkXTnGybp39cubmaa7anjcE",
  authDomain: "mrdonald-30870.firebaseapp.com",
  databaseURL: "https://mrdonald-30870-default-rtdb.europe-west1.firebasedatabase.app",
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
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);
  return (
    <Context.Provider value={{
      auth,
      openItem
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order

      {...orders} 
      {...openItem} 
      {...auth}
      {...orderConfirm}
      />
      <Menu/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      {orderConfirm.openOrderConfirm && 
      <OrderConfirm {...orders} {...auth} {...orderConfirm} 
      firebaseDatabase={firebase.database}/>}
   </Context.Provider>
  );
}

export default App;
