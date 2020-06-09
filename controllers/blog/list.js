import blogDAO from '../../model/blog/dao.js';

const list = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const blogs = await blogDAO.list();
        // console.log(blogs, ' sale del metodo list');
        
        res.json(blogs);

    } catch (error) {


    }
}

export default list;