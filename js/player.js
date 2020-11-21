class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
            playerCountRef.on("value",function(data){
            playerCountRef = data.val()
        })    
    }

    updateCount(count){
        database.ref("/").update({
         PlayerCount: count
        })  
    }

    update(name){
        var playerIndex = "player" +playerCount;
        dataBase.ref(playerIndex).set({
           name: name
        })
    }
}