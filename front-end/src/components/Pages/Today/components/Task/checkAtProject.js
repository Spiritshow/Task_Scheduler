import axios from "axios";


const checkAtproject = (id) => {

    const showTask = async (id) => {
        try {
        const response = await axios.get(`http://localhost:3001/api/task?search=${id}`)
            .then(result => {return DefinitionStatus(result.data)})
            .then(resultState => {
                return updateStateProject({id: id, state: resultState})
            })
        }catch(error) {
            console.error('Ошибка получения данных:', error);
        }
    }

    const updateStateProject = async (prop) => {
        try 
        {
            const response = await axios.put(`http://localhost:3001/api/taskAtProject`,{id: prop.id, state: prop.state});
            
        }catch(error) {
                console.error('Ошибка получения данных:', error);
        }
    }

    const DefinitionStatus = (tasks) => {
        if (tasks){
        const allTrue = tasks.every(task => task.state === "green");
        return allTrue ? "green" : "yellow";}
    }


    showTask(id);
}

export default checkAtproject;