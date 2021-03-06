import React, {useState} from 'react';
import './CardRandom.css';

const CardRandom = () => {
  const randomNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [order, setOrder] = useState(randomNum);

  const onClick = e => {

    console.log(e.target)
  }

  return (
    <div className = "CardRandom">
      {randomNum.map(num => 
        <div 
          className = "CardPeace"
          onClick = {onClick}
        >{num}</div>
        )} 
    </div>
  );
};

export default CardRandom;