ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:bread" })
    event.remove({ id: "architects_palette:bread_block" })
    event.shaped(Item.of('architects_palette:bread_block'),
        [
            'aaa',
            'aaa',
            'aaa'
        ],
        { a: 'minecraft:bread' }
    )
    event.remove({ id: "farmersdelight:wheat_dough_from_water" })
    event.shapeless(Item.of('minecraft:honey_bottle'),
        [
            '3x minecraft:honeycomb',
            'minecraft:glass_bottle'
        ]
    )

    // event.recipes.farmersdelight.cutting(
    //     'spelunkery:rock_salt',
    //     '#minecraft:pickaxes',
    //     [
    //         'spelunkery:salt',
    //         ChanceResult.of('spelunkery:salt', 0.25)
    //     ]
    // )
})