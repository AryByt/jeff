import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import remodeling from '../assets/images/remodeling.png';
import carpentry from '../assets/images/carpentry.png';
import assembly from '../assets/images/assembly.png';
import maintenance from '../assets/images/maintenance.png';
function Cards() {
  return (
    <div className="cards">
      <h1>WHAT CAN I DO FOR YOU?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://thehandymanalex.com/files/pictures/painting-min.jpg"
              text="Pain, Power washing, Texture, Stain, Spray & Many more!"
              label="Painting"
              path="/painting"
            />
            <CardItem
              src="https://gmconstructiongroup.com/wp-content/uploads/lawrence-new-york-Handyman-Services-GM2.jpg"
              text="Flooring, Vanities, Cabinets, Doors & More"
              label="Installation"
              path="/installation"
            />
            <CardItem
              src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/Articles/All-About-Fencing-Step-1.jpg"
              text="Toilets, Screen Doors, Drywall, Tile & More"
              label="Repair"
              path="/repair"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={carpentry}
              text="Build, Construct, Install & More"
              label="Carpentry"
              path="/carpentry"
            />
            <CardItem
              src={assembly}
              text="Furniture Assembly, Bed Frames & More"
              label="Assembly"
              path="/assembly"
            />
            <CardItem
              src={remodeling}
              text="Kitchens, Bathrooms, Basements & More"
              label="Remodeling"
              path="/remodeling"
            />
            <CardItem
              src={maintenance}
              text="Repair, Install, Grout, Patch & More"
              label="Maintenance"
              path="/maintenance"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
