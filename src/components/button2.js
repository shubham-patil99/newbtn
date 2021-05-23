import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"

const Button2 = () =>
(

    <div className="accordion accordion-flush" id="accordionFlushExample">

        <div className="image">
             <StaticImage
                src="../images/css.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="" 
            />
        </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          2
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    </div>






)

export default Button2