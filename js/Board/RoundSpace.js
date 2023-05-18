import BoardInterface from './BoardInterface.js'

class RoundSpace extends BoardInterface {
    constructor() {}

    buildMajorFacility(player, cardIdx) {
        player.resourceManager.addMajorCard(cardIdx)
        MajorCardManager.removeMajorCard(cardIdx)
    }

    buildFence(player) {
        // 울타리 치기
    }

    sowSeeds(player, idx) {
        // if (idx == Field && Field.isPlant === false) Field.plantCrop(씨앗);
    }

    bakeBread(player) {
        // major 카드가 있는지 확인하고, 어떤 카드인지도 확인해야 함.
    }

    accumulateSheep(player, cnt) {
        player.ResourceManager.addResource(RT.SHEEP, cnt)
    }

    increaseFamily(player, idx) {
        if (type(player.tileManager.playerBoard[idx]) === Room) {
            if (player.tileManager.playerBoard[idx].isEmpty) {
                player.tileManager.playerBoard[idx].isChild = true
            }
        }
    }

    upgradeHouse(player) {
    }

    accumulateStone(player, cnt) {
        player.ResourceManager.addResource(RT.STONE, cnt)
    }
}

export default RoundSpace