import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"

const Button1 = () =>
(

<div className="full-content">
    <h1>Four Principles To Drive <span style={{color:`blue`}}>High Engagement Learning </span></h1>

<div className="tab-content" id="pills-tabContent" >
  <div  className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
  <div className="image">
     <StaticImage
        src="../images/html.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="" 
        className="img1"
    />
  </div>
  <h5 className="btn1content">Offer customised training plans that Improve learner engagement.</h5>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  <div className="image23">
             <StaticImage
                src="../images/css.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="" 
                className="image23i"
            />
        </div>
    <h5 className="btn1content">Enable learners to pick up knowledge assets that are pertinent to their jobs.</h5>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  
  <div className="image23">
             <StaticImage
                src="../images/javascript.png/"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="" 
                className="image23i"
            />
        </div>
    <h5 className="btn1content"> Learning outcomes can be transparently tracked, credentialed</h5>
  </div>
  <div className="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab">
      
  <div className="image">
             <StaticImage
                src="../images/react.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="" 
                className="img1"
                
            />
        </div>
  <h5 className="btn1content">Enables the organic and planned formation  new skills and capabilities.</h5>
</div>
</div>

<div className="btncontent">
<ul  className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li  className="nav-item" role="presentation">
    <button id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> 1 </button>
  <h4>HTML</h4>  
  </li>
  <li className="nav-item" role="presentation">
    <button id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> 2 </button>
    <h4>CSS</h4>  
  </li>
  <li className="nav-item" role="presentation">
    <button id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> 3 </button>
    <h4>javascript</h4>
  </li>
  <li  className="nav-item" role="presentation">
    <button id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> 4 </button>
    <h4>React</h4>
  </li>
</ul>
</div>

</div>



)

export default Button1


/*<div className="accordion accordion-flush" id="accordionFlushExample">

<div className="image">
     <StaticImage
        src="../images/html.jpg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="" 
    />
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingOne">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
  1
</button>
</h2>
<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
<div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
</div>
</div>
</div>

  className="nav-link"

*/
