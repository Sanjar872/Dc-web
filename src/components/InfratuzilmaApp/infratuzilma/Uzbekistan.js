import {VectorMap} from '@south-paw/react-vector-maps';
import {Map} from "./appc";
import {data} from "../store";
import {useState} from "react";

export default function Uzbekistan() {
   const [region, setRegion] = useState('');
   const [position, setPosition] = useState({screenX: 0, screenY: 0});

   const onMouseOver = (e) => {
      setPosition({screenX: e.clientX, screenY: e.clientY});
      setRegion(e.target.ariaLabel)
   }

   const onMouseLeave = (e) => {
      setRegion("")
   }

   return (
      <Map>
         <VectorMap {...data} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']}
                    layerProps={{onMouseOver, onMouseLeave}}/>
         <p style={{position: 'absolute', top: position.screenY, left: position.screenX, display: 'block'}}>{region}</p>
      </Map>
   )
}