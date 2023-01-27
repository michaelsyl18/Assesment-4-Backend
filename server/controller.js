module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A smooth long journey! Great expectations.","A lifetime of happiness lies ahead of you.","A short pencil is usually better than a long memory any day.","All the effort you are making will ultimately pay off.","A truly rich life contains love and art in abundance"];
        
       let randomIndex = Math.floor(Math.random() * fortune.length);
       let randomFortune = fortune[randomIndex];

       res.status(200).send(randomFortune);
    },

    displayText: (req, res) => {
        const { text } = req.body;
    
        const newTask = {
          text,
          id: globalId
        }
    
        taskList.push(newTask);
        
        res.status(200).send(taskList)
      },
    
      deleteTask: (req, res) => {
        const {id} = req.params;
    
        const index = taskList.findIndex(e => e.id === +id)
    
        taskList.splice(index, 1)
        
        res.status(200).send(taskList)
      }
} 

