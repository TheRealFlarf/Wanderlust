ServerEvents.recipes(event => {
    // ============================================================================== Helper Functions
    let WOOD_TYPES = [
        'minecraft:oak',
        'minecraft:spruce',
        'minecraft:birch',
        'minecraft:dark_oak',
        'minecraft:acacia',
        'minecraft:jungle',
        'minecraft:crimson',
        'minecraft:warped',
        'minecraft:bamboo',
        'minecraft:pale_oak',
        'minecraft:mangrove',
        'minecraft:cherry',

        'nomansland:pine',
        'nomansland:maple',
        'nomansland:walnut',
        'nomansland:willow',
        
        'caverns_and_chasms:azalea',

        'upgrade_aquatic:driftwood',
        'upgrade_aquatic:river',

        'quark:blossom',

        // 'enderscape:veiled',
        // 'enderscape:celestial',
        // 'enderscape:murublight',

        'architects_palette:twisted',

        'mynethersdelight:powdery',

        'gardens_of_the_dead:soulblight',
        'gardens_of_the_dead:whistlecane'
    ]
    const generateStairs = (output, inputMaterial) => {
        event.shaped('4x ' + output, [
            'a  ',
            'aa ',
            'aaa'
        ], {
            a: inputMaterial
        })
        event.stonecutting(output, inputMaterial)
    }
    const generateSlabs = (output, inputMaterial) => {
        event.shaped('6x ' + output, [
            'aaa',
            '   ',
            '   '
        ], {
            a: inputMaterial
        })
        event.stonecutting('2x ' + output, inputMaterial)
    }
    const generateWalls = (output, inputMaterial) => {
        event.shaped('6x ' + output, [
            'aaa',
            'aaa',
            '   '
        ], {
            a: inputMaterial
        })
        event.stonecutting(output, inputMaterial)
    }
    const redoButtonRecipe = (material, button) => {
        event.shapeless(button, [ material, 'minecraft:redstone' ])
    }
    const bulkButtonRedo = () => {
        let input
        let output
        WOOD_TYPES.forEach(type => {
            input = type + '_planks'
            output =  type + '_button'
            redoButtonRecipe(input, output)
        })
    }
    // ============================================================================== Crafting
    event.shapeless(Item.of('architects_palette:dark_oak_boards'),
        [
            '3x minecraft:honeycomb',
            'minecraft:glass_bottle'
        ]
    )
    event.shaped(Item.of('4x wanderlust:prismarine_scales'),
        [
            'aa',
            'aa'
        ],
        { a: 'minecraft:prismarine' }
    )
    generateStairs('wanderlust:prismarine_scale_stairs', 'wanderlust:prismarine_scales')
    generateSlabs('wanderlust:prismarine_scale_slab', 'wanderlust:prismarine_scales')

    event.remove({ output: 'architects_palette:basalt_tiles' })
    event.remove({ output: 'architects_palette:basalt_tile_slab' })
    event.remove({ output: 'architects_palette:basalt_tile_stairs' })
    event.remove({ output: 'architects_palette:basalt_tile_wall' })
    event.shaped(Item.of('4x architects_palette:basalt_tiles'),
        [
            'aa',
            'aa'
        ],
        { a: 'minecraft:smooth_basalt' }
    )
    event.stonecutting('architects_palette:basalt_tiles', 'minecraft:smooth_basalt')
    generateSlabs('architects_palette:basalt_tile_slab', 'architects_palette:basalt_tiles')
    generateStairs('architects_palette:basalt_tile_stairs', 'architects_palette:basalt_tiles')
    generateWalls('architects_palette:basalt_tile_wall', 'architects_palette:basalt_tiles')
    event.stonecutting('architects_palette:basalt_tile_stairs', 'minecraft:smooth_basalt')
    event.stonecutting('2x architects_palette:basalt_tile_slab', 'minecraft:smooth_basalt')
    event.stonecutting('architects_palette:basalt_tile_wall', 'minecraft:smooth_basalt')

    
    event.remove({ id: 'architects_palette:chiseled_basalt_tiles' })
    event.remove({ id: 'architects_palette:stonecutting/chiseled_basalt_tiles' })
    event.shaped(Item.of('architects_palette:chiseled_basalt_tiles'),
        [
            'aa',
            '  '
        ],
        { a: 'minecraft:polished_basalt' }
    )

    event.remove({ output: 'minecraft:nether_brick_wall' })
    event.shaped(Item.of('4x minecraft:nether_brick_wall'),
        [
            'aza',
            'aza',
            '   '
        ],
        { 
            a: 'minecraft:nether_bricks',
            z: 'minecraft:nether_brick'
        }
    )
    event.stonecutting('minecraft:nether_brick_wall', 'minecraft:nether_bricks')

    event.remove({ output: 'minecraft:red_nether_brick_wall' })
    event.shaped(Item.of('4x minecraft:red_nether_brick_wall'),
        [
            'aza',
            'aza',
            '   '
        ],
        { 
            a: 'minecraft:red_nether_bricks',
            z: 'minecraft:nether_brick'
        }
    )
    event.stonecutting('minecraft:red_nether_brick_wall', 'minecraft:red_nether_bricks')

    // ============================================================================== Furnace
    event.smelting('wanderlust:cracked_sea_lantern', 'minecraft:sea_lantern')

    //event.remove({ output: 'minecraft:glass' })
    event.smelting('blockbox:rough_glass', 'minecraft:sand')
    event.smelting('minecraft:glass', 'blockbox:rough_glass')
    event.blasting('minecraft:glass', 'minecraft:sand')

    // ============================================================================== Consistency
    event.shaped('minecraft:tall_dry_grass', [
        'a ',
        'a '
    ], {
        a: 'minecraft:short_dry_grass'
    })
    event.shaped('nomansland:tall_beachgrass', [
        'a ',
        'a '
    ], {
        a: 'nomansland:short_beachgrass'
    })
    event.shaped('upgrade_aquatic:tall_beachgrass', [
        'a ',
        'a '
    ], {
        a: 'upgrade_aquatic:beachgrass'
    })
    // ============================================================================== Redstone
    event.remove({ output: '#minecraft:buttons' })
    bulkButtonRedo()
    redoButtonRecipe('minecraft:stone', 'minecraft:stone_button')
    redoButtonRecipe('minecraft:polished_blackstone', 'minecraft:polished_blackstone_button')

    // redoButtonRecipe('enderscape:polished_end_stone', 'enderscape:polished_end_stone_button')
    // redoButtonRecipe('enderscape:polished_veradite', 'enderscape:polished_veradite_button')
    // redoButtonRecipe('enderscape:polished_mirestone', 'enderscape:polished_mirestone_button')
    // redoButtonRecipe('enderscape:polished_kurodite', 'enderscape:polished_kurodite_button')

    redoButtonRecipe('caverns_and_chasms:tin_ingot', 'caverns_and_chasms:hold_button')
    redoButtonRecipe('minecraft:copper_ingot', 'caverns_and_chasms:lift_button')
    redoButtonRecipe('caverns_and_chasms:exposed_copper_ingot', 'caverns_and_chasms:exposed_lift_button')
    redoButtonRecipe('caverns_and_chasms:weathered_copper_ingot', 'caverns_and_chasms:weathered_lift_button')
    redoButtonRecipe('caverns_and_chasms:oxidized_copper_ingot', 'caverns_and_chasms:oxidized_lift_button')
    redoButtonRecipe('caverns_and_chasms:waxed_copper_ingot', 'caverns_and_chasms:waxed_lift_button')
    redoButtonRecipe('caverns_and_chasms:waxed_exposed_copper_ingot', 'caverns_and_chasms:waxed_exposed_lift_button')
    redoButtonRecipe('caverns_and_chasms:waxed_weathered_copper_ingot', 'caverns_and_chasms:waxed_weathered_lift_button')
    redoButtonRecipe('caverns_and_chasms:waxed_oxidized_copper_ingot', 'caverns_and_chasms:waxed_oxidized_lift_button')
    
    redoButtonRecipe('minecraft:gold_ingot', 'quark:gold_button')
    redoButtonRecipe('minecraft:iron_ingot', 'quark:iron_button')

    event.remove({ output: 'minecraft:lever' })
    event.shaped('minecraft:lever', [
        'a  ',
        'b  ',
        'c  '
    ], {
        a: 'minecraft:stick',
        b: 'minecraft:cobblestone',
        c: 'minecraft:redstone'
    })
})