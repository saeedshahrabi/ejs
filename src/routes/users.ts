import express from 'express';

const routes = express.Router()

routes.get('/',(req, res, next)=>{
    // res.send('this is users route');
    const arr =[
        {name:'saeed'},
        {name:'hamid'},
        {name:'Mahdi'},
    ]
    res.render('users',{
        title:'EJS',
        usersList: arr
    })
})
routes.post('/',(req, res, next)=>{
    console.log(req.body)
    res.send('you added a user')
})




export default routes;