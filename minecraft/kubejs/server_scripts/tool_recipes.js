ServerEvents.recipes(event => {
    // ============================================================================== Flint Tools

    event.remove({ output: "minecraft:stone_sword" })
    event.shaped(Item.of('minecraft:stone_sword'),
        [
            'a  ',
            'a  ',
            'bc '
        ],
        { a: 'minecraft:flint', b: 'minecraft:stick', c: 'farmersdelight:rope' }
    )
    event.remove({ output: "minecraft:stone_pickaxe" })
    event.shaped(Item.of('minecraft:stone_pickaxe'),
        [
            'aaa',
            ' br',
            ' b '
        ],
        { a: 'minecraft:flint', b: "minecraft:stick", r: "#c:bindings/rope" }
    )
    event.remove({ output: "minecraft:stone_axe" })
    event.shaped(Item.of('minecraft:stone_axe'),
        [
            'aar',
            'ab ',
            ' b '
        ],
        { a: 'minecraft:flint', b: "minecraft:stick", r: "#c:bindings/rope" }
    )
    event.remove({ output: "minecraft:stone_shovel" })
    event.shaped(Item.of('minecraft:stone_shovel'),
        [
            'ar ',
            'b  ',
            'b  '
        ],
        { a: 'minecraft:flint', b: "minecraft:stick", r: "#c:bindings/rope" }
    )
    event.remove({ output: "minecraft:stone_hoe" })
    event.shaped(Item.of('minecraft:stone_hoe'),
        [
            'aar',
            ' b ',
            ' b '
        ],
        { a: 'minecraft:flint', b: "minecraft:stick", r: "#c:bindings/rope" }
    )
    event.remove({ output: "minecraft:shears" })
    event.shapeless(Item.of('minecraft:shears'),
        [
            '2x farmersdelight:flint_knife'
        ]
    )

    // ============================================================================== Iron Tools
    event.remove({ output: "minecraft:iron_sword" })
    event.shaped(Item.of('minecraft:iron_sword'),
        [
            'a  ',
            'a  ',
            'b  '
        ],
        { a: 'minecraft:iron_ingot', b: 'wanderlust:treated_stick' }
    )
    event.remove({ output: "minecraft:iron_pickaxe" })
    event.shaped(Item.of('minecraft:iron_pickaxe'),
        [
            'aaa',
            ' b ',
            ' b '
        ],
        { a: 'minecraft:iron_ingot', b: "wanderlust:treated_stick" }
    )
    event.remove({ output: "minecraft:iron_axe" })
    event.shaped(Item.of('minecraft:iron_axe'),
        [
            'aa ',
            'ab ',
            ' b '
        ],
        { a: 'minecraft:iron_ingot', b: "wanderlust:treated_stick" }
    )
    event.remove({ output: "minecraft:iron_shovel" })
    event.shaped(Item.of('minecraft:iron_shovel'),
        [
            'a  ',
            'b  ',
            'b  '
        ],
        { a: 'minecraft:iron_ingot', b: "wanderlust:treated_stick" }
    )
    event.remove({ output: "minecraft:iron_hoe" })
    event.shaped(Item.of('minecraft:iron_hoe'),
        [
            'aa ',
            ' b ',
            ' b '
        ],
        { a: 'minecraft:iron_ingot', b: "wanderlust:treated_stick" }
    )

    // ============================================================================== Wooden Tools
    event.remove({ output: "minecraft:wooden_pickaxe" })
    event.remove({ output: "minecraft:wooden_sword" })
    event.remove({ output: "minecraft:wooden_axe" })
    //event.remove({ output: "minecraft:wooden_shovel" })
    event.remove({ output: "minecraft:wooden_hoe" })
})