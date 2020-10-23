import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';



const mapIcon =  Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [40, 52],
  iconAnchor: [20, 52],
  popupAnchor: [170, 2],
})


function OrphanagesMap() {
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2> Escolha um orfanato no mapa </h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Taubaté</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-23.0216064,-45.5346316]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}     
      >

        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 

        <Marker 
        icon={mapIcon}
        position={[-23.0216064,-45.5346316]}
        >


        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">

          Lar das Meninas
          <Link to="">
            <FiArrowRight size={20} color="#FFF" />
          </Link>

        </Popup>

        </Marker>

        
      
      {/* <TileLayer 
       
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}


      /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}

export default OrphanagesMap; 