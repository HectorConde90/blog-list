import blogDAO from '../../model/blog/dao.js';

const create = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd

        const blog = await blogDAO.create(req.body);
        console.log('Blog cargado')
        

    } catch (error) {

        throw error;
    }
}

export default create;