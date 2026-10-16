ServerEvents.recipes(event => {
    event.shapeless(Item.of('3x wanderlust:treated_stick'),
        [
            '3x minecraft:stick',
            'nomansland:resin_oil_bottle'
        ]
    )

    event.remove({ id: "nomansland:light_blue_dye_from_lupine" })
    event.shapeless(Item.of('dye_depot:slate_dye'),
        [
            'nomansland:blue_lupine'
        ]
    )
    event.remove({ id: "nomansland:red_dye_from_flowerbed" })
    event.shapeless(Item.of('dye_depot:maroon_dye'),
        [
            '4x nomansland:red_flowerbed'
        ]
    )
    event.remove({ id: "minecraft:pink_dye_from_cactus_flower" })
    event.shapeless(Item.of('dye_depot:coral_dye'),
        [
            'minecraft:cactus_flower'
        ]
    )
    event.remove({ id: "caverns_and_chasms:yellow_dye_from_false_hope" })
    event.shapeless(Item.of('dye_depot:tan_dye'),
        [
            'caverns_and_chasms:false_hope'
        ]
    )
})