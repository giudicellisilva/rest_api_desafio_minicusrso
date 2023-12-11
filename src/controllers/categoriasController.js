const categorias = [{id: 1, name: "Livros", description: "Categoria voltada para livros"}]
function getAllCategorias(){
    return categorias;
}

async function setCategoria(Name, Description){
    const newId = categorias.length + 1;
    await categorias.push({id: newId, name: Name, description: Description});
    return {id: newId, name: Name, description: Description}
}

module.exports = {getAllCategorias, setCategoria};