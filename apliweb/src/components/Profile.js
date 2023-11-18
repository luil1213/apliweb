import React, {Fragment, useState, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./Navbar";
import ListaCompras from './ListaCompras';
import MenuCompras from './MenuCompras';




const Profile = () => {

  const [lista_productos, setlista_productos] = useState({
    idlista: '',
    idproducto: 0, 
    estado: ''
  })

  const [lista_producto, setlista_producto] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getlista_producto = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setlista_producto(res))
    }
    getlista_producto()
    setListUpdated(false)
  }, [listUpdated])

  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

     

      <div>
        <img src={user.picture} alt={user.name} /> 
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <Fragment>
      <Navbar brand='Lista de compras'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Compras</h2>

            <ListaCompras lista_productos={lista_producto} setlista_productos={setlista_productos} lista_producto={lista_producto} setListUpdated={setListUpdated}/>

          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Menu de Compras</h2>
            
            <MenuCompras lista_productos={lista_productos} setlista_productos={setlista_productos}/>

          </div>
        </div>
      </div>
    </Fragment>


      </div>
    )
  );
};

export default Profile;