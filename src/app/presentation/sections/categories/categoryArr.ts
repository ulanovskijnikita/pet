import accessory from "/icons/categories/accessory.svg"
import bird from "/icons/categories/bird.svg"
import dog from "/icons/categories/dog.svg"
import fish from "/icons/categories/fish.svg"
import cat from "/icons/categories/cat.svg"

type CategoryArr = {

    id: number
    icon: string
    title: string
}

const categoryArr: CategoryArr[] = [

    {
        id: 1,
        icon: accessory,
        title: "Accessories"
    },

    {
        id: 2,
        icon: bird,
        title: "Bird shop"
    },

    {
        id: 3,
        icon: dog,
        title: "Dog shop"
    },

    {
        id: 4,
        icon: fish,
        title: "Fish shop"
    },

    {
        id: 5,
        icon: cat,
        title: "Cat shop"
    },
]

export default categoryArr