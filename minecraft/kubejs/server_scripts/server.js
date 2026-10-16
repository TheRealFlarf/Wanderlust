// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

// ===================================================================================================== Recipes
ServerEvents.recipes(event => {
    // ============================================================================== Furnace Stuff
    event.remove({ output: "minecraft:furnace" })
    event.shaped(Item.of('minecraft:furnace'),
        [
            'aaa',
            'a a',
            'aba'
        ],
        {
            a: 'minecraft:cobblestone',
            b: "minecraft:campfire"
        }
    )
    event.remove({ output: "quark:deepslate_furnace" })
    event.shaped(Item.of('quark:deepslate_furnace'),
        [
            'aaa',
            'a a',
            'aba'
        ],
        {
            a: 'minecraft:cobbled_deepslate',
            b: "minecraft:campfire"
        }
    )
    event.remove({ output: "quark:blackstone_furnace" })

    event.remove({ output: "minecraft:smoker" })
    event.remove({ output: "minecraft:blast_furnace" })

    // ============================================================================== Stone Stuff
    event.remove({ output: 'minecraft:gravel' })
    event.shaped(Item.of('minecraft:gravel'),
        [
            'aa',
            'aa'
        ],
        {
            a: 'nomansland:pebbles'
        }
    )
    event.remove({ output: 'minecraft:cobblestone' })
    event.shaped(Item.of('minecraft:cobblestone'),
        [
            'aaa',
            'aaa',
            'aaa'
        ],
        {
            a: 'nomansland:pebbles'
        }
    )
    event.remove({ id: 'nomansland:pebbles' })
    event.shapeless(Item.of('4x nomansland:pebbles'),
        [
            'minecraft:cobblestone',
        ]
    )
    
    // ============================================================================== Block Reworks
    event.remove({ output: "minecraft:candle" })
    event.remove({ id: "architects_palette:flint_block" })
    event.shaped(Item.of('8x minecraft:candle'),
        [
            'a ',
            'b '
        ],
        {
            a: 'minecraft:string',
            b: "minecraft:honeycomb"
        }
    )
    event.remove({ id: "farmersdelight:rope" })
    event.shaped(Item.of('2x farmersdelight:rope'),
        [
            'a ',
            'a '
        ],
        {
            a: 'farmersdelight:straw'
        }
    )

    event.remove({ id: "architects_palette:flint_block" })
    event.shaped(Item.of('4x architects_palette:flint_block'),
        [
            'aa',
            'aa'
        ],
        {
            a: 'caverns_and_chasms:flint_block'
        }
    )
    
})





