console.log("\nHome Work 4 - task 3");

const profile = {
    username: "Jacob",
    playTime: 300,

    getInfo() { 
        return `${this.username} has ${this.playTime} active hours!`;
    },
    changeUsername(newName) { 
        if (typeof newName === "string" )
            this.username = newName;
    },
    updatePlayTime(hours) {
        if (typeof hours === "number")
        this.playTime += hours;
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

