
ServerEvents.recipes(event => {
    const {awakening,enchanter,infusion,reprocessor,soul_extraction,soulium_spawner} = event.recipes.mysticalagriculture;

    infusion(
        "mysticalagriculture:prosperity_seed_base", // result
        "#forge:seeds", // item in middle
        [
            "mysticalagriculture:prosperity_block",
            "botania:mana_glass",
            "mysticalagriculture:prosperity_shard",
            "botania:livingrock",
            "mysticalagriculture:prosperity_block",
            "botania:mana_glass",
            "mysticalagriculture:prosperity_shard",
            "botania:livingrock"
        ]
    );

    infusion(
        "mysticalagriculture:inferium_seeds", // result
        "mysticalagriculture:prosperity_seed_base", // item in middle
        [
            "mysticalagriculture:inferium_essence",
            "mysticalagriculture:inferium_block",
            "mysticalagriculture:inferium_essence",
            "mysticalagriculture:inferium_block",
            "mysticalagriculture:inferium_essence",
            "mysticalagriculture:inferium_block",
            "mysticalagriculture:inferium_essence",
            "mysticalagriculture:inferium_block"
        ]
    );

    infusion(
        "mysticalagriculture:soulium_seed_base", // result
        "mysticalagriculture:prosperity_seed_base", // item in middle
        [
            'mysticalagriculture:soul_dust',
            'mysticalagriculture:soulium_dust',
            'mysticalagriculture:soul_dust',
            'mysticalagriculture:soulium_dust',
            'mysticalagriculture:soul_dust',
            'mysticalagriculture:soulium_dust',
            'mysticalagriculture:soul_dust',
            'mysticalagriculture:soulium_dust'
        ]
    );

    infusion(
        'matc:inferium_crystal',
        'mysticalagriculture:inferium_gemstone_block',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:inferium_block', 4)
        ]
    )

    infusion(
        'matc:prudentium_crystal',
        'matc:inferium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:prudentium_block', 4)
        ]
    )

    infusion(
        'matc:tertium_crystal',
        'matc:prudentium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:tertium_block', 4)
        ]
    )

    infusion(
        'matc:imperium_crystal',
        'matc:tertium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:imperium_block', 4)
        ]
    )

    infusion(
        'matc:supremium_crystal',
        'matc:imperium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:supremium_block', 4)
        ]
    )
    infusion(
        'matc:supremium_crystal',
        'matc:imperium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagriculture:supremium_block', 4)
        ]
    )

    infusion(
        'mysticalagriculture:master_infusion_crystal',
        'matc:supremium_crystal',
        [
            Item.of('mysticalagriculture:prosperity_block', 4),
            Item.of('mysticalagradditions:insanium_block', 4)
        ]
    )
})