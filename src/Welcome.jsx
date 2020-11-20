import React,{useState} from 'react';

function Welcome(){

    let time=new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

  const current = () =>{

    time=new Date().toLocaleTimeString();
     setCtime(time);

  };

    setInterval(current,1000);
     return(
     <div  className="text">
  
    <h1 >
        {ctime}
    </h1>
    
  </div>




     );


};


export default Welcome;