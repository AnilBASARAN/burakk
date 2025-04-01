
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Box1 from "./Box1.jsx";
import Box2 from "./Box2.jsx";
import Box3 from "./Box3.jsx";
import Box4 from "./Box4.jsx";

const App = () => {
  return (
    <div className='bg-red-400'>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
};

export default App;
