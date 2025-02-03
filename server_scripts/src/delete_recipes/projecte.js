ServerEvents.recipes(event =>{
    const delete_list = [
        'projecte:philosophers_stone',
        'projecte:transmutation_table',
        'projecte:transmutation_tablet'
    ]
    delete_list.forEach(function(object){
        event.remove({ output: object })
    }
    )
})