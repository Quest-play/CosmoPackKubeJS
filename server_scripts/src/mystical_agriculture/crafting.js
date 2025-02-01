ServerEvents.recipes(event => {
    event.shapeless('mysticalagriculture:air_agglomeratio', [
        'minecraft:gravel', 'minecraft:clay', 'minecraft:glass_bottle', 'minecraft:dirt', 'botania:rune_air'
    ])

    event.shapeless('mysticalagriculture:earth_agglomeratio', [
        'minecraft:gravel', 'minecraft:clay', 'minecraft:glass_bottle', 'minecraft:dirt', 'botania:rune_earth'
    ])

    event.shapeless('mysticalagriculture:water_agglomeratio', [
        'minecraft:gravel', 'minecraft:clay', 'minecraft:glass_bottle', 'minecraft:dirt', 'botania:rune_water'
    ])

    event.shapeless('mysticalagriculture:fire_agglomeratio', [
        'minecraft:gravel', 'minecraft:clay', 'minecraft:glass_bottle', 'minecraft:dirt', 'botania:rune_fire'
    ])

    event.shaped('4x mysticalplus:ultimum_essence', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mysticalagriculture:awakened_supremium_block',
        B: 'mysticalagriculture:master_infusion_crystal'
    })

    event.shaped('mysticalplus:ultimum_gemstone', [
        'AB ',
        'B  '
    ], {
        A: 'mysticalagriculture:prosperity_gemstone',
        B: 'mysticalplus:ultimum_essence'
    })

    event.shaped('mysticalplus:ultimum_ingot', [
        'AB ',
        'B  '
    ], {
        A: 'mysticalagriculture:prosperity_ingot',
        B: 'mysticalplus:ultimum_essence'
    })

    event.shapeless('9x mysticalplus:ultimum_nugget', ['mysticalplus:ultimum_ingot'])
    event.shapeless('mysticalplus:ultimum_ingot', ['mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget','mysticalplus:ultimum_nugget'])
})