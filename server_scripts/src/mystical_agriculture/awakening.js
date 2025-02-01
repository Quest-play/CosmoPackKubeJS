ServerEvents.recipes(event => {
    const {awakening,enchanter,infusion,reprocessor,soul_extraction,soulium_spawner} = event.recipes.mysticalagriculture;
    awakening(
        'mysticalagriculture:flight_augment', // result
        'mysticalagriculture:jump_boost_iii_augment', // item in the middle
        [
            Item.of('mysticalagriculture:nether_star_essence',20), // may contain count
            Item.of('mysticalagriculture:air_essence',40),
            Item.of('mysticalagriculture:diamond_essence',40),
            Item.of('mysticalagriculture:chicken_essence',40)
        ], // items in essence vessels 
        [
            'mysticalagradditions:insanium_block',
            'mysticalagradditions:insanium_essence',
            'mysticalagradditions:insanium_block',
            'mysticalagradditions:insanium_essence',
        ] // items in pedestal
    );

    awakening(
        'mysticalagriculture:awakened_supremium_block', // result
        'mysticalagradditions:insanium_block', // item in the middle
        [
            Item.of('mysticalagradditions:nether_star_shard',40), // may contain count
            Item.of('mysticalagradditions:dragon_egg_chunk',40),
            Item.of('botania:gaia_ingot',40),
            Item.of('mysticalagriculture:dragon_breath_seed_essence',40)
        ], // items in essence vessels 
        [
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust',
            'mysticalagriculture:cognizant_dust'
        ] // items in pedestal
    );

    awakening(
        'mysticalagriculture:multiplying_seed_seeds', // result
        'mysticalagriculture:prosperity_seed_base', // item in the middle
        [
            Item.of('mysticalplus:ultimum_essence',40), // may contain count
            Item.of('mysticalplus:ultimum_essence',40),
            Item.of('mysticalplus:ultimum_essence',40),
            Item.of('mysticalplus:ultimum_essence',40)
        ], // items in essence vessels 
        [
            'mekanism:pellet_antimatter',
            'mekanism:pellet_antimatter',
            'mekanism:pellet_antimatter',
            'mekanism:pellet_antimatter'
        ] // items in pedestal
    );
})