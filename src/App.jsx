import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import lagunitas_logo from './assets/lagunitas_logo.png'
import ipa from './assets/ipa.png'
import green_LSS from './assets/green_LSS.png'
import splat_black from './assets/splat_black.png'
import dogimage from './assets/dogimage.png'
import youtube_image from './assets/youtube_image.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import dth from './assets/dth_ProgramBanner.jpg'
import littleSumpin from './assets/littleSumpin_MasonJar_Photo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className='app'>
      <div className='nav'>
        <div className='nav-top'>
          <img src={lagunitas_logo} alt='logo' />
          <button>Buy Beer</button>
          <GiHamburgerMenu id='burger' />
        </div>
        <div className='nav-left'>
          <p><GiHamburgerMenu /></p>
          <p><FaSearch /></p>
        </div>
      </div>

      <div className='main'>
        <img src={ipa} alt='ipa' id='bottle' />

        <div className='page1'>
          <h1>unlimite release ipa </h1>
          <img src={dogimage} alt='dogimage' id='page1-dog-img' />
        </div>

        <div className='page2'>
          <div className='page2-part1'>
            <h3>unlimited release</h3>
            <h1>India Pale Ale</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              officia error? Totam unde nulla ea repudiandae, corporis optio recusandae
              repellat asperiores minima voluptate soluta laboriosam debitis architecto
              quaerat fugiat nostrum aliquam. Minima ratione sequi omnis ipsa beatae ab odio
              id ad, voluptates fuga incidunt nisi.
            </p>
            <button>Buy Now!</button>
          </div>
          <div className='page2-part2'>
            <h3>ABV</h3>
            <h5>Alcohole by valume</h5>
            <div id='box'>
              <h2>6.2 <span>%</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere
                ullam hic tempore unde quaerat quisquam
              </p>
            </div>
            <h3>IBU</h3>
            <h5>Isn't Reservation Units</h5>
            <div id="box">
              <h2>51 <span>.1</span></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere
                ullam hic tempore unde quaerat quisquam
              </p>
            </div>
            <div id="page2_part2_text1">
                <h3>ABV</h3>
                <h5>Alcohole by valume</h5>
                <div id="box">
                    <h2>6.2 <span>%</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere 
                        ullam hic tempore unde quaerat quisquam
                    </p>
                </div>
            </div>
          </div>
        </div>

        
        <div className="page3">
          <h1>MounthFeels</h1>
          <div className="page3-text">
            <div className="page3-text-part1">
              <Link>
                <img src={youtube_image} alt="" />
              </Link>
              <h5>Hear it from our beamonster jeremy marshall</h5>
            </div>
            <div className="page3-text-part2">
              <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi officiis omnis fuga ipsum, molestias voluptates rem vitae perferendis, illo sit aliquid tenetur nisi.</h5>
              <h2>STYLE</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
            </div>
          </div>
        </div>

        <div className="page4">
          <div className="page4-color1">
            <img className="page4-color-image1" src={green_LSS} alt="" />
            <div className="page4-color-image1-text">
              <h4>tropical</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
            </div>
          </div>
          <div className="page4-color2">
            <img className="page4-color-image2" src={green_LSS} alt="" />
            <div className="page4-color-image2-text">
              <h4>pink</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
            </div>
          </div>
          <div className="page4-color3">
            <img className="page4-color-image3" src={splat_black}  alt="" />
            <div className="page4-color-image3-text">
              <h4>caramel-malt</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
            </div>
          </div>
          <img src={littleSumpin} alt="" id="page4_color_image4" />
        </div>

        <div id="page5">
          <h5>Availability</h5>
          <h1>year round</h1>
          <div id="page5_image_box">
            <div class="page5_extraimage" id="page5_bottel">
              <img id="image11" src={image1} alt="" />
              <h4>On Top</h4>
            </div>
            <div id="page5_bottel">
              <img id="image22" src={image2} alt="" />
              <h4>22 oz Bottles</h4>
              <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
              <img id="image33" src={ipa} alt="" />
              <h4>22 oz Bottles</h4>
              <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
              <img id="image44" src={image3} alt="" />
              <h4>21 oz Bottles</h4>

            </div>
            <div id="page5_bottel">
              <img id="image55" src={image4} alt="" />
              <h4>33 oz Bottles</h4>

            </div>
          </div>

        </div>


        <div id="page6">
          <div id="page6_part1">
            <img src={dth}  alt="" />
          </div>
          <div id="page6_part2">
            <h5>Recipes</h5>
            <h1>Beer Speaks. Bellies Grumble.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores saepe, ex magnam temporibus repellendus nobis doloremque voluptates quis ad fugit rem similique, porro, neque voluptate numquam quae? Repudiandae, ratione!</p>
            <button>Read More</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
