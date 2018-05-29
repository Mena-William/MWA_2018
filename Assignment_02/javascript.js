{
    const tree = {
        name: "home",
        files: ["notes.txt", "todo.txt"],
        subFolders: [{
                name: "payroll",
                files: ["paper.pdf", "funds.csv"],
                subFolders: []
            },
            {
                name: "misc",
                files: ["summer1.jpg", "summer2.jpg", "summer3.jpg"],
                subFolders: [{
                    name: "logs",
                    files: ["logs1", "logs2", "logs3", "logs4"],
                    subFolders: []
                }]
            }
        ]
    };

    const find = fileName => searchTree => {
        if (searchTree.files.includes(fileName)) {
            return true;
        } else {
            // for loop on sub folders
            for (let i = 0; i < searchTree.subFolders.length; i++) 
            {
                if (find(fileName)(searchTree.subFolders[i])) 
                {
                    return true;
                }
            }
        }
        return false;
    }

    console.log(find("summer1.jpg")(tree)); // true 
    console.log(find("randomfile")(tree)); // false

};