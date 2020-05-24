import axios from 'axios';


const url = 'api/tasks/';

class TaskService {
    // get Task
    static getTask() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(task => ({
                        ...task,
                        createdAt: new Date(task.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    // Create Task
    static insertTask(text, description, priority, status){
        return axios.post(url, {
            text,
            description,
            priority,
            status
        });
    }
    // Delete Task
    static deleteTask(id){
        return axios.delete(`${url}${id}`);

    }
}

export default TaskService;