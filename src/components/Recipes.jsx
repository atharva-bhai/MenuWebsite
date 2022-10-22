import React from "react";
import "../index.css"

import menu from "./data";
import Palya from "../images/Palya.jpg"
import Dosa from "../images/Dosa.jpg"
import Chapati from "../images/Chapati.jpg"
import Poori from "../images/Poori.jpg"
import LemonRice from "../images/LemonRice.jpg"
import Upma from "../images/Uppittu.jpg"
import AkkiRotti from "../images/Rotti.jpg"
import Idli from "../images/Idli.jpg"
import RiceBath from "../images/RiceBath.jpg"
import Massoppu from "../images/Massoppu.jpg"
import ThiliSaaru from "../images/Rasam.jpg"
import Gorikayi from "../images/Gorikay.jpg"
import Hurlikayi from "../images/HuliHurlikayi.jpg"
import Sorekayi from "../images/Sorekayi.jpg"
import Capsicum from "../images/CapsicumRice.jpg"
import Kosambari from "../images/Kosambari.jpg"
import KesariBath from "../images/KesariBath.jpg"
import { toPlainObject } from "lodash";

function Recipes(){
    return (<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Chapati} alt="Chapati" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Chapati</h5>
                    <p>Chapati (alternatively spelled chapatti, chappati, chapathi, or chappathi; pronounced as IAST: capātī, capāṭī, cāpāṭi), also known as roti, rotli, safati, shabaati, phulka, (in East Africa) chapo, and (in the Maldives) roshi,[1] is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa, Arabian Peninsula and the Caribbean.</p>
                    <a href="https://hebbarskitchen.com/how-to-make-roti-soft-chapati/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Poori} alt="Second slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Poori</h5>
                    <p>Puri (sometimes spelled as poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes.</p>
                    <a href="https://hebbarskitchen.com/poori-recipe-puri-bhaji-recipe/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Massoppu} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Massoppu</h5>
                    <p>Massoppu is a dish made in Karnataka. In that, different forms of leaves are grounded and masalas are added to it</p>
                    <a href="https://www.youtube.com/watch?v=WCDLqXcVppY" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={LemonRice} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Lemon Rice</h5>
                    <p>Chitranna (Kannada: ಚಿತ್ರಾನ್ನ; also known as lemon-rice) is a rice-based dish widely prepared in South India. It is prepared by mixing cooked rice with a special seasoning called Oggarane or Gojju. Characteristic for the seasoning are mustard seeds, fried lentils, peanuts, curry leaves, chillies, lemon juice and other optional items such as scrapes of unripe mango</p>
                    <a href="https://hebbarskitchen.com/lemon-rice-recipe-chitranna-recipe/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ThiliSaaru} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Thili Saaru/Rasam</h5>
                    <p>Rasam is a spicy South Indian soup.[1] While it is sometimes served on its own as a soup, it is usually served as a side for rice, puttu, idiyappam, or dosa. In a traditional South Indian meal, it is part of a course that includes sambar rice and curd rice. Rasam has a distinct taste in comparison to sambar due to its own seasoning ingredients and is fluid in consistency. Chilled prepared versions are marketed commercially as well as rasam paste in bottles.[2]</p>
                    <a href="https://hebbarskitchen.com/thili-saaru-recipe-karnataka-style/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Palya} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Vegetable Palya</h5>
                    <p>Vegetable Palya is a Vegetable Salad with masalas</p>
                    <a href="https://www.youtube.com/watch?v=L0arJHpDDHI" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              
              
              <div className="carousel-item">
                <img className="d-block w-100" src={Upma} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Upma/Uppittu</h5>
                    <p>Upma, uppumavu, or uppittu is a dish originating from the Indian subcontinent, most common in Kerala, Andhra Pradesh, Tamil Nadu, Telangana,[1] Karnataka, Maharashtrian, and Sri Lankan Tamil breakfast, cooked as a thick porridge from dry-roasted semolina or coarse rice flour.[2] Various seasonings and/ vegetables are often added during the cooking, depending on individual preferences</p>
                    <a href="https://hebbarskitchen.com/lemon-rice-recipe-chitranna-recipe/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              
                
              <div className="carousel-item">
                <img className="d-block w-100" src={Hurlikayi} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Hurlikayi/Beans-Carrot Sambar</h5>
                    <p>It's a sambar made with Beans and Carrot</p>
                    <a href="https://swayampaaka.com/sambar-recipes/mixed-vegetable-sambar/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={AkkiRotti} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Akki Rotti</h5>
                    <p>Akki Rotti is a South Indian bread made with Rice Flour and other toppings</p>
                    <a href="https://hebbarskitchen.com/akki-roti-recipe-masala-akki-rotti/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Gorikayi} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Gorikayi Huli</h5>
                    <p>Gorikayi Huli is a Sambar made with a vegetable called Gorikayi</p>
                    <a href="https://www.youtube.com/watch?v=6OsoRMAfeLs" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Idli} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Idli</h5>
                    <p>Idli or idly (/ɪdliː/ (listen)) is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body.</p>
                    <a href="https://hebbarskitchen.com/how-to-make-soft-idli-wet-grinder/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Dosa} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Dosa</h5>
                    <p>Dosas originated in South India; their exact birthplace in that region is a matter of conjecture. According to historian P. Thankappan Nair, dosa originated in the city of Udupi in present-day Karnataka.[1] However, according to food historian K. T. Achaya, references in the Sangam literature suggest that dosa (as dosai) was already in use in the ancient Tamil country around the 1st century.[2] Achaya states that the earliest written mention of dosa appears in literature of present-day Tamil Nadu, in the 8th century, while the earliest mention of dosa in the Kannada literature appears a century later.[3]</p>
                    <a href="https://hebbarskitchen.com/masala-dosa-recipe-crispy-masale-dose/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={RiceBath} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Rice Bath</h5>
                    <p>Rice Bath is similar to Palau but some changes are made</p>
                    <a href="https://hebbarskitchen.com/rice-bath-recipe-karnataka-style/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Sorekayi} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Sorekayi Huli</h5>
                    <p>Sorekayi/Lauki/Bottle Guard is cooked and mixed with Sambar</p>
                    <a href="https://www.youtube.com/watch?v=tYWBQTqV70Q" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Capsicum} alt="Third slide" />
                <div className="carousel-caption bg-dark d-none d-md-block">
                    <h5>Capsicum Bath</h5>
                    <p>Capsicum rice is a type of rice bath where capsicum and potato are being used</p>
                    <a href="https://hebbarskitchen.com/capsicum-aloo-rice-recipe-capsicum-pulao/" className="btn btn-primary bg-primary">Recipe</a>
                  </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={KesariBath} alt="Third slide" />
                    <div className="carousel-caption bg-dark d-none d-md-block">
                        <h5>Kesari Bath</h5>
                        <p>Kesari Bath or kesari Baath (Kannada: ಕೇಸರಿ ಬಾತ್) is a sweet Indian food that is common throughout the country. The classNameic ingredients used for its preparation are semolina, sugar, ghee (usually), water, and milk. The sweet is more commonly known as Jonnadula Halwa in certain parts of northern India.</p>
                        <a href="https://hebbarskitchen.com/rava-kesari-recipe-kesari-bath-recipe/" className="btn btn-primary bg-primary">Recipe</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Kosambari} alt="Third slide" />
                    <div className="carousel-caption bg-dark d-none d-md-block">
                        <h5>Kaalu Husli</h5>
                        <p>Kaalu Husli is the Palya made with Seeds</p>
                        <a href="https://www.youtube.com/watch?v=sozIobsCkcE" className="btn btn-primary bg-primary">Recipe</a>
                        </div>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
    </div>
    
  );
}

export default Recipes;