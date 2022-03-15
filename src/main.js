import Entity from './Core/Entity.js'
import './Components/myComponent.js'

// Adds an a-entity to the scene with given attributes
new Entity(
    {
        'my-component':'',
        'geometry':'primitive:sphere; radius: 0.2',
        'material':'emissive:#00ff66',
        'position':'0 1 -4',
        'light':'type:point; intensity:1.0; color:#00ff66'
    }
)
