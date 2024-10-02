export async function GET() {
    let res = {
        profile: [
            {
                name: "Ahmed Hakeem",
                email: "hakeemkoo@gmail.com",
                image: "https://i.ibb.co/NVTxbFZ/af8ab26d-ff90-4a30-9a0e-ea8fb30a4c1d-2.jpg",

            }
        ],
        products: [
            {
                "id": 1,
                "title": "Password-Generator",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "web",
                "url": "https://hakeem235.github.io/Password-Generator/",
                "github": "https://github.com/hakeem235/Password-Generator",
                "thumbnail": "https://i.ibb.co/Q6DBKRL/Screenshot-2024-09-30-at-20-02-20.png"
            },
            {
                "id": 2,
                "title": "Code Quiz",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "web",
                "url": "https://hakeem235.github.io/Code-Quiz/",
                "github": "https://github.com/hakeem235/Code-Quiz",
                "thumbnail": "https://i.ibb.co/cb22TnZ/Screenshot-2024-09-30-at-18-18-41.png"
            },
            {
                "id": 3,
                "title": "Work Day Scheduler",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "web",
                "url": "https://hakeem235.github.io/Work-Day-Scheduler/",
                "github": "https://github.com/hakeem235/Work-Day-Scheduler",
                "thumbnail": "https://i.ibb.co/PCxhXqk/Screenshot-2024-09-30-at-20-04-29.png"
            },
            {
                "id": 4,
                "title": "Bakery Shop",
                "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                "category": "web",
                "url": "https://bakery-ahmed.netlify.app/",
                "github": "https://github.com/hakeem235/bakery_shop",
                "thumbnail": "https://i.ibb.co/RHSRyk6/Screenshot-2024-09-30-at-20-49-04.png"
            },
            
        ],
        skills: [
            {
                "id": 1,
                "name": "HTML",
                "level": "Advanced",
                "image": "https://i.ibb.co/ryTFjBd/HTML.jpg"
            },
            {
                "id": 2,
                "name": "CSS",
                "level": "Advanced",
                "image": "https://i.ibb.co/GQ7wj1w/CSS.jpg"
            },
            {
                "id": 3,
                "name": "JavaScript",
                "level": "Advanced",
                "image": "https://i.ibb.co/hRjQLH1/Java-Script.jpg"
            },
            {
                "id": 4,
                "name": "React",
                "level": "Advanced",
                "image": "https://i.ibb.co/5xf39fZ/React-Light.jpg"
            },
            {
                "id": 5,
                "name": "NextJS",
                "level": "Advanced",
                "image": "https://i.ibb.co/3cRPHYh/Next-JS-Light.jpg"
            },
            {
                "id": 6,
                "name": "TailwindCSS",
                "level": "Advanced",
                "image": "https://i.ibb.co/L0Hsy5j/Tailwind-CSS-Light.jpg"
            },
            {
                "id": 67,
                "name": "Git",
                "level": "Advanced",
                "image": "https://i.ibb.co/xhmnJGc/Git.jpg"
            },
            {
                "id": 67,
                "name": "PostgreSQL",
                "level": "Advanced",
                "image": "https://i.ibb.co/cCBcBxc/Postgre-SQL-Light.jpg"
            },
            {
                "id": 67,
                "name": "Postman",
                "level": "Advanced",
                "image": "https://i.ibb.co/c8G22np/Postman.jpg"

            },

            {
                "id": 67,
                "name": "Python",
                "level": "Advanced",
                "image": "https://i.ibb.co/q5ZQQY5/Python-Light.jpg"
            },
            {
                "id": 67,
                "name": "R",
                "level": "Advanced",
                "image": "https://i.ibb.co/4jgC6hx/R-Light.jpg"
            },
        ],
        images:[
            {
            id: 1,
            name:'Under Construction',
            url:'https://i.ibb.co/F4RrB3S/Under-Construction-Webpage-or-Project-Under-Construction.jpg'
            }
        ]
    }
    return Response.json(res)
}

