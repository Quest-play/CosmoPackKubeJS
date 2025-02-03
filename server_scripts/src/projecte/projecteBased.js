ServerEvents.recipes(event => {
    event.shaped('projecte:philosophers_stone', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'mekanism_extras:alloy_radiance',
        B: 'createutilities:void_steel_ingot',
        C: 'botania:dragonstone_block'
    })

    event.shaped('projecte:transmutation_table', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:obsidian',
        B: 'projecte:dark_matter',
        C: 'projecte:philosophers_stone'
    })

    event.shaped('projecte:transmutation_tablet', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'projecte:red_matter_block',
        B: 'mythicbotany:alfsteel_block',
        C: 'projecte:transmutation_table'
    })
})