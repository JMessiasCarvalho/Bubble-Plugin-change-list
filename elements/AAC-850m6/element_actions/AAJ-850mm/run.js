function(instance, properties, context) {

instance.data.lista[properties.index - 1] = properties.valor;
    
    instance.publishState('lista',instance.data.lista);
    instance.publishState('item',instance.data.dados);
    	instance.triggerEvent('alterado');


}