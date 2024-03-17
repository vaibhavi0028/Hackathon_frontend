import Planet1 from '../img/planet1.png';
import Planet2 from '../img/planet2.png';
import Planet3 from '../img/planet3.png';
import '../style.css';

const Bganimation = () => {
  return ( 
    <div className="Bganimation">
      <div class="viewport">
        <span class="moveX1">
        <div class="moveY1"><span class="elipsoid">
          <div class="element"><img src={Planet1} alt="img"/> </div>
        </span></div>
        </span>
        <span class="moveX2">
          <div class="moveY2"><span class="elipsoid">
          <div class="element"><img src={Planet2} alt="img"/></div>
          </span></div>
        </span>
        <span class="moveX3">
          <div class="moveY3"><span class="elipsoid">
          <div class="element"><img src={Planet3} alt="img"/></div>
          </span></div>
        </span></div>
    </div>
   );
}
 
export default Bganimation;