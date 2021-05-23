import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"

const Button3 = () =>
(

    <div className="accordion accordion-flush" id="accordionFlushExample">

        <div className="image">
             <StaticImage
                src="../images/javascript.png/"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="" 
            />
        </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    </div>






)

export default Button3