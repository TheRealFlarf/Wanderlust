// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

ClientEvents.lang('en_us', event => {
    event.renameBlock('nomansland:cobblestone_bricks', 'Weathered Cobblestone Bricks')
    event.renameBlock('nomansland:cobblestone_brick_slab', 'Weathered Cobblestone Brick Slab')
    event.renameBlock('nomansland:cobblestone_brick_stairs', 'Weathered Cobblestone Brick Stairs')
    event.renameBlock('nomansland:cobblestone_brick_wall', 'Weathered Cobblestone Brick Wall')

    event.renameBlock('nomansland:mossy_cobblestone_bricks', 'Mossy Weathered Cobblestone Bricks')
    event.renameBlock('nomansland:mossy_cobblestone_brick_slab', 'Mossy Weathered Cobblestone Brick Slab')
    event.renameBlock('nomansland:mossy_cobblestone_brick_stairs', 'Mossy Weathered Cobblestone Brick Stairs')
    event.renameBlock('nomansland:mossy_cobblestone_brick_wall', 'Mossy Weathered Cobblestone Brick Wall')

    event.renameBlock('nomansland:cracked_cobblestone_bricks', 'Cracked Weathered Cobblestone Bricks')

    event.renameBlock('nomansland:pebbles', 'Pebble Pile')
    
    event.renameBlock('caverns_and_chasms:flint_block', 'Block of Flint')
    event.renameBlock('architects_palette:flint_block', 'Polished Flint')

    event.renameBlock('architects_palette:basalt_tiles', 'Smooth Basalt Tiles')
    event.renameBlock('architects_palette:basalt_tile_stairs', 'Smooth Basalt Tile Stairs')
    event.renameBlock('architects_palette:basalt_tile_slab', 'Smooth Basalt Tile Slab')
    event.renameBlock('architects_palette:cracked_basalt_tiles', 'Cracked Smooth Basalt Tiles')
    event.renameBlock('architects_palette:chiseled_basalt_tiles', 'Chiseled Polished Basalt')

    event.renameBlock('woodworks:dark_oak_boards', 'Dark Oak Beam')

    event.renameItem('minecraft:stone_pickaxe', 'Flint Pickaxe')
    event.renameItem('minecraft:stone_axe', 'Flint Axe')
    event.renameItem('minecraft:stone_shovel', 'Flint Shovel')
    event.renameItem('minecraft:stone_sword', 'Flint Sword')
    event.renameItem('minecraft:stone_hoe', 'Flint Hoe')

    event.renameItem('minecraft:blaze_powder', 'Smoldering Powder')
})

ItemEvents.modifyTooltips(event => {
    event.modify('#c:consumables', tooltip => {
        tooltip.insert(1, Text.of('§8§oConsumable'))
    })
    event.modify('#c:placeables', tooltip => {
        tooltip.removeText('§oPlaceable')
        tooltip.insert(1, Text.of('§8§oPlaceable'))
    })
    event.modify('#c:throwables', tooltip => {
        tooltip.insert(1, Text.of('§8§oThrowable'))
    })
    event.modify('brewinandchewin:coaster', tooltip => {
        tooltip.insert(1, Text.of('§8§oDisplays up to four items'))
    })
    event.modify('nomansland:tap', tooltip => {
        tooltip.insert(1, Text.of('§8§oExtracts fluids from trees'))
        tooltip.insert(1, Text.of('§8§oPlace above a cauldron to fill it'))
    })
    event.modify('nomansland:resin', tooltip => {
        tooltip.insert(1, Text.of('§8§oCan be extracted from spruce or pine trees via Tap'))
    })

    event.modify('#minecraft:bundles', tooltip => {
        tooltip.insert(1, Text.of('§8§o<Left-Click> to Insert'))
    })
})
