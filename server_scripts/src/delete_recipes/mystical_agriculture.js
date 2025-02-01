ServerEvents.recipes(event =>{
    const delete_list = [
        'mysticalagriculture:prosperity_seed_base', 
        'mysticalagriculture:inferium_seeds', 
        'mysticalagriculture:soulium_seed_base', 
        'mysticalagriculture:air_agglomeratio', 
        'mysticalagriculture:earth_agglomeratio', 
        'mysticalagriculture:water_agglomeratio', 
        'mysticalagriculture:fire_agglomeratio', 
        '@matc', 
        'mysticalagriculture:master_infusion_crystal',
        'mysticalagriculture:flight_augment',
        'mysticalagriculture:awakened_supremium_block'
    ]
    delete_list.forEach(function(object){
        event.remove({ output: object })
    }
    )
})