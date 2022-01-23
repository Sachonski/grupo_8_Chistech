const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // ***este queda en main***
    home: (req, res) => {
        let userSession = req.session.user

        return res.render('home', { products: products, userSession: userSession });
    },
    // ***este queda en main***
    carrito: (req, res) => {
        let userSession = req.session.user

        if (req.session.user) {
            return res.render('carrito', {userSession: userSession});
        } else {
            res.redirect('users/login');
        }
    },
    // ***este queda en main***
    sobreNosotros: (req, res) => {
        let userSession = req.session.user

<<<<<<< HEAD
		if (fs.existsSync(`public/images/${product.image}`)) {
			fs.unlinkSync(`public/images/${product.image}`);
		}
		res.redirect('/productos');
    }
        
	}
=======
        return res.render('sobreNosotros', {userSession: userSession});
    }, 
>>>>>>> dev
}

module.exports = controller;