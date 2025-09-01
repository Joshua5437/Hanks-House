import { useState } from 'react';
import { Text, View } from "react-native";

const App = () => {
   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {
      height: '200px',
      width: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      cursor: 'pointer',
      //backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
      color: isHover ? 'red' : 'green',
   };

   return (
      <View
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      >
         <Text
         style={{color: isHover ? 'red' : 'green',}}
         >
            Hover me!
         </Text>
      </View>
   );
};

export default App;