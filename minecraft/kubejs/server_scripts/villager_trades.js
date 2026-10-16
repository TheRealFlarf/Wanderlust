MoreJS.villagerTrades(event => {
    // ============================================================================== Removals
    event.removeVanillaTypedTrades()
    event.removeModdedTypedTrades()

    // ============================================================================== Farmer
    event.addCustomTrade('minecraft:farmer', 1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald')
        offer.output = Item.of('minecraft:dirt', 4)

        offer.maxUses = 1
        offer.villagerExperience = 12
        offer.rewardExp = false
    })
    event.addCustomTrade('minecraft:farmer', 1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald')
        offer.output = Item.of('minecraft:dirt', 8)

        offer.maxUses = 20
        offer.villagerExperience = 40
        offer.rewardExp = false
    })
    event.addCustomTrade('minecraft:farmer', 3, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald')
        offer.output = Item.of('minecraft:dirt', 4)

        offer.maxUses = 1
        offer.villagerExperience = 12
        offer.rewardExp = false
    })

})
MoreJS.wandererTrades(event => { // ================================================ Wandering Traders
    event.removeVanillaTypedTrades()
    event.removeModdedTypedTrades()

    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 10)
        offer.output = Item.of('upgrade_aquatic:glow_squid_bucket', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 10)
        offer.output = Item.of('upgrade_aquatic:squid_bucket', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 10)
        offer.output = Item.of('minecraft:milk_bucket', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 5)
        offer.output = Item.of('tide:wooden_crate[container_loot={loot_table:"minecraft:chests/simple_dungeon"}, lore=["' + "{'text':'§dTest Crate (Dungeon Loot)'}" + '"]]', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 5)
        offer.output = Item.of('tide:wooden_crate[container_loot={loot_table:"minecraft:chests/buried_treasure"}, lore=["' + "{'text':'§dTest Crate (Burried Treasure Loot)'}" + '"]]', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 5)
        offer.output = Item.of('tide:wooden_crate[container_loot={loot_table:"minecraft:chests/bastion_treasure"}, lore=["' + "{'text':'§dTest Crate (Bastion Treasure Loot)'}" + '"]]', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(1, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:emerald', 5)
        offer.output = Item.of('tide:wooden_crate[container_loot={loot_table:"minecraft:chests/desert_pyramid"}, lore=["' + "{'text':'§dTest Crate (Desert Pyramid Loot)'}" + '"]]', 1)

        offer.maxUses = 1
        offer.rewardExp = true
    })

    // One LVL2 trade per trader, chooses randomly
    event.addCustomTrade(2, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:bread', 10)
        offer.output = Item.of('minecraft:emerald', 5)

        offer.maxUses = 1
        offer.rewardExp = true
    })
    event.addCustomTrade(2, (offer, entity, random) => {
        offer.firstCost = Item.of('minecraft:baked_potato', 16)
        offer.output = Item.of('minecraft:emerald', 5)

        offer.maxUses = 1
        offer.rewardExp = true
    })

})