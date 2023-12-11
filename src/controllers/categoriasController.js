const categorias = [{id: 1, name: "Livros"}]
function getAllCategorias(){
    return categorias;
}

async function setCategoria(Name){
    const newId = categorias.length + 1;
    await categorias.push({id: newId, name: Name});
    return {id: newId, name: Name}
}

module.exports = {getAllCategorias, setCategoria};