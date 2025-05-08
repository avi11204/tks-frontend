// // import { Routes, Route } from 'react-router-dom';
// // import PlaceOrder from './clientss/PlaceOrder';

// // const ClientMain = () => {
// //   return (
// //     <div>
// //       <h1>Client Portal</h1>
// //       <Routes>
// //         <Route path="/" element={<PlaceOrder />} />
// //         {/* Add more client routes here if needed */}
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default ClientMain;
// // // import { Routes, Route } from 'react-router-dom';
// // // import PlaceOrder from './clientss/Placeorder';
// // // import MyOrder from './clientss/Myorder';
// // // import HomeClient from './clientss/Homeclient';

// // // const Client = () => {
// // //   return (
// // //     <div>
// // //       <h1>Client Portal</h1>
// // //       <Routes>
// // //         <Route path="/" element={<HomeClient />} />
// // //         <Route path="/placeorder" element={<PlaceOrder />} />
// // //         <Route path="/myorder" element={<MyOrder />} />
// // //       </Routes>
// // //     </div>
// // //   );
// // // };

// // // export default Client;
// import { Routes, Route } from 'react-router-dom';
// import HomeClient from '../pages/clientss/Homeclient';
// import PlaceOrder from '../pages/clientss/Placeorder';

// const ClientMain = () => {
//   return (
   
// <Routes>
//   <Route path="/client" element={<HomeClient />} />
//   <Route path="/client/placeorder" element={<PlaceOrder />} />
// </Routes>

//   );
// };

// export default ClientMain;
import { Routes, Route } from 'react-router-dom';
import HomeClient from './clientss/Homeclient';
import PlaceOrder from './clientss/Placeorder';
import MyOrders from './clientss/Myorder';

const ClientMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeClient />} />
      <Route path="placeorder" element={<PlaceOrder />} />
      <Route path="orders" element={<MyOrders />} />
    </Routes>
  );
};

export default ClientMain;
