new Vue({
    el:"#app",
    data:{
        name:"dre",
        toggle:false,
        monsterHealth:100,
        playerHealth:100,
        randomAttackPlayer:0,
        randomAttackMonster:0,
        results:[]
        
    },
    methods:{
        startGame:function(){
           return (
               this.toggle=!this.toggle,
               this.monsterWidth=this.monsterHealth,
               this.playerWidth=this.playerHealth
               )

        },
        attack:function(){
                this.randomAttackPlayer=Math.floor(Math.random()*10),
                this.randomAttackMonster=Math.floor(Math.random()*10),
                this.monsterHealth-=this.randomAttackPlayer,
                this.playerHealth-=this.randomAttackMonster,
                this.results.push('Player Hits Monster for'+this.randomAttackPlayer),
                this.results.push('Monster Hits  Player for'+this.randomAttackMonster)
                 
        },
       giveUp:function(){
            return(
                this.toggle=!this.toggle,
                this.monsterHealth=100,
                this.playerHealth=100,
                this.results=[]
            )
        },
        special:function(){
            return (
                this.randomAttackPlayer=Math.floor(Math.random()*10) * 2,
                this.randomAttackMonster=Math.floor(Math.random()*10),
                this.monsterHealth-=this.randomAttackPlayer,
                this.playerHealth-=this.randomAttackMonster,
                this.results.push('Player Hits Monster for'+this.randomAttackPlayer),
                this.results.push('Monster Hits  Player for'+this.randomAttackMonster)
            )
        },
        heal:function(){
            this.playerHealth += 5,
            this.randomAttackMonster=Math.floor(Math.random()*10),
            this.playerHealth-=this.randomAttackMonster,
            this.results.push('Player Heals himself  for'+ 5),
            this.results.push('Monster Hits  Player for'+this.randomAttackMonster)        
        },
        monsterWinner:function(){
            if (confirm("You have been defeated")) {
                this.giveUp()
              } else {
                this.giveUp()
              }
        },
        playerWinner:function(){
            if (confirm("You have slayed the Monster")) {
                this.giveUp()
              } else {
                this.giveUp()
              }
        }
}

})