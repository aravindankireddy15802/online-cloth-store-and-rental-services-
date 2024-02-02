import React from 'react'
import "../styles/marquee.css"
import Marquee from "react-fast-marquee";
import img1 from "../assets/men/images/IMG_0047_9520c34b-d935-43b6-9cf0-37b92034e179_765x.jpg"
import img2 from "../assets/men/images/HERO_2a678e66-56a6-4f1d-a9fd-6292fb4585b4_1200x.jpg"
import img3 from "../assets/women/images/A36I2299_765x.webp"
import img5 from "../assets/women/images/cd811f8a6b424c16deabc062e3e3a62d.jpg"
import img10 from "../assets/women/images/IMG_0042_27471975-1667-4578-bb9c-8d90316b9a5c_1200x.webp"

import img4 from  "../assets/suit/mensuits/97e6941NL-DO-NAULL3-Wine_1.jpg"
import img6 from  "../assets/suit/mensuits/5107369PIS3ONSFE81762_1.jpg"
import img9 from "../assets/men/images/IMG_0129_1_66d03ed8-a563-4445-a87b-526999bb532a_765x.jpg"
import img8 from "../assets/men/images/IMG_0202_1_b1b5b8c7-b39a-4eee-97bf-34bfac937320_765x.jpg"
import img7 from "../assets/women/images/IMG_0048_0991cc94-f087-4670-974d-65d8fad1a6fe_1200x.webp"
import img11 from "../assets/women/images/IMG_0102_dcb42cc2-9f6a-4aba-ab64-3eb9df4dd98f_765x.webp"
import img12 from "../assets/suit/mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.jpg"


const ProductTemplate = (props) => {
  return (
    <div>
      <div >
        <img
          className=" marquee_img"
          src={props.image}
        />
      </div>
    </div>
  );
}
function Marque() {
  const products=[img1 ,img2 ,img9, img8, img7, img11,img12,img5,img10];
  
  return (
    <div className='marque_box'>
        <Marquee >
           { products.map((product) => (
              <ProductTemplate image={product} />
            )
            )
           }
        </Marquee>
    </div>
  )
}

export default Marque;