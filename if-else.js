let gameSession = 4500
function letsGameOn(gameSession){
    if(gameSession > 4500){
        gameSession-=1000
        console.log('session invalid')
        return
    }
    gameSession += 1500
    console.log('game in session :', gameSession)
}

letsGameOn(4589)
letsGameOn(3520)