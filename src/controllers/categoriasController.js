const users = []
async function getAllCategorias(name){
    const user = await users.find((user) => user.name === name);
    return user ? user.categorias : [];
}


async function setCategoria(userName, Name, Description){
    let newId = 1;
    const userIndex = users.findIndex((user) => user.name === userName);
    if (userIndex !== -1) {
      // Adiciona a categoria ao usuário existente
      newId = users[userIndex].categorias.length + 1
      users[userIndex].categorias.push({
        id: newId,
        name: Name,
        description: Description,
      });
    } else {
      // Cria um novo usuário com a categoria
      users.push({
        name: userName,
        categorias: [{
          id: newId,
          name: Name,
          description: Description,
        }],
      });
    }
    return {id: newId, name: Name, description: Description}
}

module.exports = {getAllCategorias, setCategoria};