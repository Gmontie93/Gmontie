import IDcard from "./Idcard";
import Data from './Data.json'
import IDcardClass from "./IdcardClass";


function IDCards(){


    //console.log(Data.data);


    return(<>
        <h1>Hello From my Cards App!</h1>
         
          {/*  Using Functional Component */}
             {Data.data.map(elm => {
              return <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
            })} 




            {/* Using Class component */}
            {/*Data.data.map(elm => {
              return <IDcardClass key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
            })*/}








       
    </>
    );


}


export default IDCards;