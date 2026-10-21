ServerEvents.tags('item', event => {
    // ============================================================================== Corrections
    event.add('c:foods', 
        'caverns_and_chasms:cave_fish', 
        'nomansland:grilled_mushrooms'
    )
    event.add('c:drinks/milk', 
        'caverns_and_chasms:golden_milk_bucket'
    )
    event.add('c:drinks', 
        'dimensional_tears:dimensional_tears_bottle'
    )
    event.add('nomansland:admin_item', 
        'moonlight:spawn_box', 
        // 'enderscape:healing'
    )
    event.add('minecraft:buttons', 
        // 'enderscape:polished_end_stone_button',
        // 'enderscape:polished_mirestone_button',

        'caverns_and_chasms:hold_button',
        'caverns_and_chasms:lift_button',
        'caverns_and_chasms:exposed_lift_button',
        'caverns_and_chasms:weathered_lift_button',
        'caverns_and_chasms:oxidized_lift_button',
        'caverns_and_chasms:waxed_lift_button',
        'caverns_and_chasms:waxed_exposed_lift_button',
        'caverns_and_chasms:waxed_weathered_lift_button',
        'caverns_and_chasms:waxed_oxidized_lift_button'
    )

    // ============================================================================== Functionality Tags
    event.add('c:placeables', 
        'nomansland:pebbles', 
        "#c:foods/edible_when_placed"
    )
    event.add('c:throwables', 
        'minecraft:snowball'
    )
    event.add('c:consumables', 
        'minecraft:potion', 
        '#c:foods', 
        "caverns_and_chasms:caviar", 
        '#c:drinks'
    )

    event.add('c:bindings/rope', 
        'farmersdelight:rope'
    )

    event.add('diy_campfires:campfire_finishing_material', 
        'farmersdelight:straw'
    )

    // ============================================================================== Misc Tags

    event.add('c:powders', 
        'minecraft:sugar', 
        'minecraft:gunpowder', 
        'spelunkery:sulfur', 
        'spelunkery:salt', 
        'spelunkery:saltpeter', 
        'spelunkery:dust', 
        'minecraft:blaze_powder', 
        'minecraft:glowstone_dust', 
        'supplementaries:ash'
    )

    event.add('c:finishes/basic', 
        'minecraft:honeycomb', 
        'nomansland:resin', 
        'caverns_and_chasms:tinplate'
    )
    event.add('c:finishes/bulk', 
        'nomansland:resin_bottle'
    )

    // ============================================================================== Item Weight/Stack Size
    event.add('c:weight/light',  // 96
        '#c:nuggets', 
        'minecraft:leaf_litter', 
        'minecraft:wildflowers', 
        'minecraft:paper', 
        '#c:powders'
    )
    event.add('c:weight/average',  // 64
        'minecraft:snowball'
    )
    event.add('c:weight/slightly_heavy',  // 16
        'minecraft:arrow'
    )
    event.add('c:weight/heavy',  // 4
        '#c:potions'
    )
    event.add('c:weight/very_heavy',  // 1
        'minecraft:dragon_egg'
    )

    // ============================================================================== Item Rarity
    event.add('c:rarity/trash', 
        'minecraft:leaf_litter'
    )
    event.add('c:rarity/common', 
        'minecraft:stone'
    )
    event.add('c:rarity/uncommon', 
        'minecraft:stone'
    )
    event.add('c:rarity/rare', 
        'minecraft:diamond'
    )
    event.add('c:rarity/epic', 
        ''
    )
    event.add('c:rarity/legendary', 
        ''
    )
    event.add('c:rarity/mythical', 
        ''
    )
    event.add('c:rarity/unobtainable', 
        '#nomansland:admin_item'
    )
})


ServerEvents.tags('block', event => {
    // ============================================================================== Corrections
    event.add('spelunkery:chiselable', 
        'blockbox:rough_glass'
    )
    event.add('minecraft:mineable/pickaxe', 
        'caverns_and_chasms:tuff_tiles',
        'caverns_and_chasms:tuff_tile_stairs',
        'caverns_and_chasms:tuff_tile_slab',
        'caverns_and_chasms:tuff_tile_wall'
    )
    event.add('c:waxable_copper_blocks',
        'blockbox:copper_pillar',
        'blockbox:exposed_copper_pillar',
        'blockbox:weathered_copper_pillar',
        'blockbox:oxidized_copper_pillar',
        'blockbox:copper_bars',
        'blockbox:exposed_copper_bars',
        'blockbox:weathered_copper_bars',
        'blockbox:oxidized_copper_bars',
        'architects_palette:copper_nub',
        'architects_palette:exposed_copper_nub',
        'architects_palette:weathered_copper_nub',
        'architects_palette:oxidized_copper_nub'
    )
    event.add('c:waxed_copper_blocks',
        'blockbox:waxed_copper_pillar',
        'blockbox:waxed_exposed_copper_pillar',
        'blockbox:waxed_weathered_copper_pillar',
        'blockbox:waxed_oxidized_copper_pillar',
        'blockbox:waxed_copper_bars',
        'blockbox:waxed_exposed_copper_bars',
        'blockbox:waxed_weathered_copper_bars',
        'blockbox:waxed_oxidized_copper_bars',
        'architects_palette:waxed_copper_nub',
        'architects_palette:waxed_exposed_copper_nub',
        'architects_palette:waxed_weathered_copper_nub',
        'architects_palette:waxed_oxidized_copper_nub'
    )

    // ============================================================================== Grouping
    event.add('c:metal_blocks/tin', 
        'caverns_and_chasms:tin_block',
        'caverns_and_chasms:tin_bricks',
        'caverns_and_chasms:tin_brick_stairs',
        'caverns_and_chasms:tin_brick_wall',
        'caverns_and_chasms:chiseled_tin_bricks',
        'caverns_and_chasms:tin_bars',
        'caverns_and_chasms:tin_chain',
        'caverns_and_chasms:tin_bulb',
        'caverns_and_chasms:roller_door',
        'caverns_and_chasms:storage_duct',
        'caverns_and_chasms:storage_duct_hatch'
    )
    event.add('c:metal_blocks/iron',
        'minecraft:iron_block',
        '#blockbox:iron_plate_blocks',
        'caverns_and_chasms:iron_bricks',
        'caverns_and_chasms:iron_brick_stairs',
        'caverns_and_chasms:iron_brick_slab',
        'caverns_and_chasms:iron_brick_wall',
        'caverns_and_chasms:chiseled_iron_bricks',
        'minecraft:iron_bars',
        'minecraft:iron_door',
        'minecraft:iron_trapdoor',
        'minecraft:chain',
        'architects_palette:iron_nub',
        'quark:iron_grate'
    )
    event.add('c:metal_blocks/copper',
        '#c:waxed_copper_blocks',
        '#c:waxable_copper_blocks',
        '#architects_palette:copper_nubs',
        '#blockbox:copper_bars'
    )
    event.add('c:metal_blocks/ancient_scrap',
        'architects_palette:ancient_plating',
        'architects_palette:ancient_plating_slab',
        'architects_palette:ancient_plating_stairs',
        'architects_palette:ancient_plating_wall',
        'architects_palette:ancient_plating_fence'
    )
    event.add('c:metal_blocks/nether_brass',
        'architects_palette:nether_brass_block',
        'architects_palette:nether_brass_slab',
        'architects_palette:nether_brass_stairs',
        'architects_palette:nether_brass_wall',
        'architects_palette:nether_brass_nub',
        'architects_palette:cut_nether_brass',
        'architects_palette:cut_nether_brass_slab',
        'architects_palette:cut_nether_brass_stairs',
        'architects_palette:cut_nether_brass_wall',
        'architects_palette:nether_brass_pillar',
        'architects_palette:smooth_nether_brass',
        'architects_palette:smooth_nether_brass_slab',
        'architects_palette:smooth_nether_brass_stairs',
        'architects_palette:nether_brass_chain',
        'architects_palette:nether_brass_lantern'
    )
    event.add('c:metal_blocks/entwine',
        'architects_palette:entwine_block',
        'architects_palette:entwine_stairs',
        'architects_palette:entwine_slab',
        'architects_palette:entwine_pillar',
        'architects_palette:chiseled_entwine',
        'architects_palette:entwine_bars'
    )
    // ============================================================================== Rain Sounds
    event.add('coolrain:metal_rain_blocks', 
        '#c:metal_blocks'
    )
    event.add('coolrain:fabric_rain_blocks', 
        ''
    )
    event.add('coolrain:glass_rain_blocks', 
        '#c:glass_blocks'
    )
    event.add('coolrain:foliage_rain_blocks', 
        ''
    )
})