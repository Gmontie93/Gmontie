import myPic from "../images/geovanny montiel pic.JPG"
const About = () => {
    return (  
        <div class="row" id="about">


        <div class="col-sm-8">
            <h1 class="display-4 margin">Geovanny Montiel</h1>
            <p class="lead indent1"><b> geovannymontiel16@gmail.com</b></p>
            <hr class="my-4"/>
            <p class="indent1"><b> Career Objective </b> <br/>Full Stack Developer looking to put his skill and knowledge to work. </p>
            <p class="lead">
             
            </p>
        </div>
        <div class="col-sm-3">
            <span>
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2 proimage margin1" src={myPic} alt="my pic"/>
            </span>
        </div>
        </div>
    );
}
 
export default About;