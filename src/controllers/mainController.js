const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
    home: (req, res)=>{
        const id = req.params.id;
        const visited = products.filter(elm => {return elm.category == "visited"})
        const offerts = products.filter(elm => {return elm.category == "in-sale"})
        res.render('home', {visited: visited, offerts: offerts});
    },
    register: (req, res)=>{

        res.render('register');
    },
    Login: (req, res)=>{
        res.render('Login');
    }
}

module.exports = controller;