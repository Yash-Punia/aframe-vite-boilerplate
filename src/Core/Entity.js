class Entity {
    constructor(data) {
        let ascene = document.querySelector("a-scene")
        this.entity = document.createElement("a-entity")
        ascene.appendChild(this.entity)

        for (let attribute in data)
        {
            this.entity.setAttribute(attribute, data[attribute])
        }
        return this.entity
    }
}

export default Entity