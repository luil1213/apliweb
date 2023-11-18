const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM lista_producto', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO lista_producto set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('lista_producto added!')
        })
    })
})

routes.delete('/:idproducto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM lista_producto WHERE lista_producto.idproducto = 2', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('lista_producto excluded!')
        })
    })
})

routes.put('/:idproducto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE lista_producto set ? WHERE idproducto = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('lista_producto updated!')
        })
    })
})

module.exports = routes