import React from 'react';

const ListaCompras = ({lista_productos, setlista_productos, lista_producto, setListUpdated}) => {


    const handleDelete = idproducto => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + idproducto, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{idlista, estado} = lista_productos

    const handleUpdate = idproducto => {
        idproducto = parseInt(idproducto, )
        idlista = parseInt(idlista, )
        //validación de los datos
        if (idlista <= 0 || idproducto  <= 0 || estado === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(lista_productos)
        }
        fetch('http://localhost:9000/api/' + idproducto, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setlista_productos({
            idlista: 0,
            idproducto: 0, 
            estado: ''
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>idlista</th>
                    <th>idproducto</th>
                    <th>estado</th>
                    
                </tr>
            </thead>
            <tbody>
                {lista_producto.map(lista_productos => (
                    <tr key={lista_productos.idlista}>
                        <td>{lista_productos.idlista}</td>
                        <td>{lista_productos.idproducto}</td>
                        <td>{lista_productos.estado}</td>
                       
                        <td>
                            <div className="mb-2">
                                <button onClick={() => handleDelete(lista_productos.idproducto)} className="btn btn-danger">Delete</button>
                                <button onClick={() => handleUpdate(lista_productos.idlista)} className="btn btn-dark">Update</button>
                            </div>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ListaCompras;