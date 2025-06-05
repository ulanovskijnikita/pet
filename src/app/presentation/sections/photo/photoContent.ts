import photo1 from '/decorative/photo/decorative-photo-1.webp'
import photo2 from '/decorative/photo/decorative-photo-2.webp'
import photo3 from '/decorative/photo/decorative-photo-3.webp'
import photo4 from '/decorative/photo/decorative-photo-4.webp'
import photo5 from '/decorative/photo/decorative-photo-5.webp'
import photo6 from '/decorative/photo/decorative-photo-6.webp'
import photo7 from '/decorative/photo/decorative-photo-7.webp'
import photo8 from '/decorative/photo/decorative-photo-8.webp'

type PhotoContent = {

    id: number
    src: string
}

const photoContent: PhotoContent[] = [

    {

        id: 1,
        src: photo1,
    },

    {

        id: 2,
        src: photo2,
    },
    
    {

        id: 3,
        src: photo3,
    },
    
    {

        id: 4,
        src: photo4,
    },
    
    {

        id: 5,
        src: photo5,
    },
    
    {

        id: 6,
        src: photo6,
    },
    
    {

        id: 7,
        src: photo7,
    },
    
    {

        id: 8,
        src: photo8,
    },
]

export default photoContent