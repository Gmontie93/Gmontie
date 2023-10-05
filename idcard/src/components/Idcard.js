const IDcard = (props) => {
    return (
        <div className="card w-25 float-start mx-1 my-1">
            <div className="card-body bg-primary" >
                <h4 className="card-title bg-info" style={{color: 'white'}}>{props.name}</h4>
                <h2 className="card-text" style={{color: 'white'}}>{props.des} </h2>
                <p className="card-text" style={{color: 'white'}}>{props.age} </p>
            </div>
        </div>
     );
}
 
export default IDcard;
