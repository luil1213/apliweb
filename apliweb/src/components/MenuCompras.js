import React from 'react';

const MenuCompras = ({lista_productos, setlista_productos}) => {

    const handleChange = e => {
        setlista_productos({
            ...lista_productos,
            [e.target.name]: e.target.value
        })
    }

    let{idlista, idproducto, estado} = lista_productos

    const handleSubmit = () => {
        idproducto = parseInt(idproducto, )
        idlista = parseInt(idlista, )
        //validación de los datos
        if (idlista <= 0 || idproducto <= 0 || estado === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(lista_productos)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setlista_productos({
            idlista: '',
            idproducto: 0 ,
            estado: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">ID LISTA</label>
                <input value={idlista} name="idlista" onChange={handleChange} type="number" id="title" className="form-control"/>
            </div>
            

            <div className="mb-3">
                <label htmlFor="edition" className="form-label">IDPRODUCTO</label>
                <input value={idproducto}  name="idproducto" onChange={handleChange} type="number" id="edition" className="form-control"/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">ESTADO</label>
                <input value={estado}  name="estado" onChange={handleChange} type="text" id="estado" className="form-control"/>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default MenuCompras;