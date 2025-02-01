ServerEvents.tags('item', event =>{
    const tier0essence =[
        'mysticalagriculture:air_essence',
        'mysticalagriculture:earth_essence',
        'mysticalagriculture:water_essence',
        'mysticalagriculture:fire_essence'
    ]

    const tier1essence = [
        'mysticalagriculture:stone_essence',
        'mysticalagriculture:dirt_essence',
        'mysticalagriculture:ice_essence',
        'mysticalagriculture:wood_essence',
        'mysticalagriculture:deepslate_essence'
    ]

    const tier2essence = [
        'mysticalagriculture:nature_essence',
        'mysticalagriculture:dye_essence',
        'mysticalagriculture:nether_essence',
        'mysticalagriculture:coal_essence',
        'mysticalagriculture:coral_essence',
        'mysticalagriculture:honey_essence',
        'mysticalagriculture:amethyst_essence',
        'mysticalagriculture:pig_essence',
        'mysticalagriculture:chicken_essence',
        'mysticalagriculture:sulfur_essence',
        'mysticalagriculture:silicon_essence',
        'mysticalagriculture:rubber_essence',
        'mysticalagriculture:turtle_essence',
        'mysticalagriculture:slime_essence',
        'mysticalagriculture:fish_essence',
        'mysticalagriculture:squid_essence',
        'mysticalagriculture:sheep_essence',
        'mysticalagriculture:cow_essence',
        'mysticalagriculture:aluminum_essence',
        'mysticalagriculture:saltpeter_essence',
        'mysticalagriculture:apatite_essence',
        'mysticalagriculture:mystical_flower_essence',
        'mysticalagriculture:limestone_essence'
    ]

    const tier3essence = [
        'mysticalagriculture:iron_essence',
        'mysticalagriculture:copper_essence',
        'mysticalagriculture:nether_quartz_essence',
        'mysticalagriculture:glowstone_essence',
        'mysticalagriculture:redstone_essence',
        'mysticalagriculture:obsidian_essence',
        'mysticalagriculture:prismarine_essence',
        'mysticalagriculture:zombie_essence',
        'mysticalagriculture:skeleton_essence',
        'mysticalagriculture:creeper_essence',
        'mysticalagriculture:spider_essence',
        'mysticalagriculture:rabbit_essence',
        'mysticalagriculture:tin_essence',
        'mysticalagriculture:bronze_essence',
        'mysticalagriculture:zinc_essence',
        'mysticalagriculture:brass_essence',
        'mysticalagriculture:silver_essence',
        'mysticalagriculture:lead_essence',
        'mysticalagriculture:graphite_essence',
        'mysticalagriculture:blizz_essence',
        'mysticalagriculture:blitz_essence',
        'mysticalagriculture:basalz_essence',
        'mysticalagriculture:manasteel_essence',
        'mysticalagriculture:sky_stone_essence',
        'mysticalagriculture:certus_quartz_essence'
    ]

    const tier4essence = [
        'mysticalagriculture:gold_essence',
        'mysticalagriculture:lapis_lazuli_essence',
        'mysticalagriculture:end_essence',
        'mysticalagriculture:experience_essence',
        'mysticalagriculture:blaze_essence',
        'mysticalagriculture:enderman_essence',
        'mysticalagriculture:ghast_essence',
        'mysticalagriculture:steel_essence',
        'mysticalagriculture:nickel_essence',
        'mysticalagriculture:ruby_essence',
        'mysticalagriculture:chrome_essence',
        'mysticalagriculture:uranium_essence',
        'mysticalagriculture:titanium_essence',
        'mysticalagriculture:tungsten_essence',
        'mysticalagriculture:mithril_essence',
        'mysticalagriculture:invar_essence',
        'mysticalagriculture:electrum_essence',
        'mysticalagriculture:constant_essence',
        'mysticalagriculture:sapphire_essence',
        'mysticalagriculture:peridot_essence',
        'mysticalagriculture:soulium_essence',
        'mysticalagriculture:signalium_essence',
        'mysticalagriculture:lumium_essence',
        'mysticalagriculture:elementium_essence',
        'mysticalagriculture:osmium_essence',
        'mysticalagriculture:fluoritee_essence',
        'mysticalagriculture:refined_glowstone_essence',
        'mysticalagriculture:refined_obsidian_essence',
        'mysticalagriculture:fluix_essence'
    ]

    const tier5essence = [
        'mysticalagriculture:wither_skeleton_essence',
        'mysticalagriculture:diamond_essence',
        'mysticalagriculture:emerald_essence',
        'mysticalagriculture:netherite_essence',
        'mysticalagriculture:platinum_essence',
        'mysticalagriculture:iridium_essence',
        'mysticalagriculture:enderium_essence',
        'mysticalagriculture:terrasteel_essence',
        'mysticalagriculture:yellorium_essence',
        'mysticalagriculture:cyanite_essence'
    ]

    const tier6essence = [
        'mysticalagriculture:dragon_egg_essence',
        'mysticalagriculture:gaia_spirit_essence',
        'mysticalagriculture:dragon_breath_seed_essence',
        'mysticalagriculture:nether_star_essence'
    ]

    tier0essence.forEach(essence =>{
        event.add('mysticalplus:elemental_essence', essence)
    })

    tier1essence.forEach(essence =>{
        event.add('mysticalplus:tier1_essence', essence)
    })

    tier2essence.forEach(essence =>{
        event.add('mysticalplus:tier2_essence', essence)
    })

    tier3essence.forEach(essence =>{
        event.add('mysticalplus:tier3_essence', essence)
    })

    tier4essence.forEach(essence =>{
        event.add('mysticalplus:tier4_essence', essence)
    })

    tier5essence.forEach(essence =>{
        event.add('mysticalplus:tier5_essence', essence)
    })

    tier6essence.forEach(essence =>{
        event.add('mysticalplus:tier6_essence', essence)
    })
})