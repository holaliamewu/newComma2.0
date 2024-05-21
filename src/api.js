
const date = new Date();
const currentDay = date.getDate()

console.log(currentDay)

const users = [
    {   id: 1,
         name: "Natalie Narh",
        profile: " " ,
        username: "natalie" ,
        location: "London, UK",
        connected: false,
        profession: "",
        website: "www.newcomma.com",
        posts: [
            {
                timeMade: "1h",
                message: {
                    text: "Proud of you my sister @nakinarh.",
                    images: ""
                },
                likes: 5
            }
        ]
        },
    {   id: 2,
         name: "Emeka Ndulue",
        profile: " " ,
        username: "emekandulue" ,
        location: "Lagos, Nigeria",
        connected: true,
        profession: "",
        website: ""
        },
    {   id: 3,
         name: "Naki Narh",
        profile: " " ,
        username: "nakinarh" ,
        location: "London, UK",
        connected: false,
        profession: "Artist & illustrator",
        website: "www.nakinarh.com",
        posts: [
            {
                timeMade: "17 May, 2024",
                message: "Testing layouts for my art print pop up tomorrow 🧚🏿‍♀️",
                likes: 8,
            }
        ]
        },
    {   id: 4,
         name: "Nigel Atta-Mensah",
        profile: " " ,
        username: "nigel" ,
        location: "London, UK",
        connected: true,
        profession: "Co-founder, NewComma",
        website: "www.nigelam.com",
        posts: [
            {
                timeMade: "4d",
                message: "NewComma2.0 is coming. brace up💛!",
                likes: 15,
            }
        ]
        },
    {   id: 5,
         name: "Leslie Arkoful",
        profile: " " ,
        username: "leslie.arkoful" ,
        location: "Accra, Ghana",
        connected: false,
        profession: "Software Engineer - ArkinstaHQ",
        website: "www.lesliearkoful.com",
        posts: [
            {
                timeMade: "1w",
                message: "Take a look at @NewCommaJobs",
                likes: 4,
            }
        ]
        },

];

const jobs = [
    {
        title: "NC Fund: May",
        company: "NC Fund",
        location: "London, UK",
        timePosted: `${currentDay} days`,
        description: "The NewComma Creative Fund is a monthly £100 microgrant to support an African/Black creative with no strings attached. This...",
        image: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/Q3y7yZmcFrySz7UXcf6c7wkj"
    },
    {
        title: "Jr. frontend engineer",
        company: "NewCommaHQ",
        location: "London, UK",
        timePosted: "5 days",
        description: " NewComma seeks an entry-level software engineer with frontend super-powers to join their team and make impact.",
        image: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/H4nb73nx4X3wZyVs5SwdcatQ"
    },
    {
        title: "Brand Designer",
        company: "NewComma Jobs",
        location: "remote",
        timePosted: "a week",
        description: "Are you a creative, business-driven designer who can use your skills to elevate the brand of a company. Join us...",
        image: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/H4nb73nx4X3wZyVs5SwdcatQ"
    },
    {
        title: "Digital Illustrator",
        company: "NewComma Jobs",
        location: "remote",
        timePosted: "2 weeks",
        description: "Enjoy the art and the act of making things visually appealling ? Maybe you should join us to  change the world while enjoying yourself along...",
        image: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/H4nb73nx4X3wZyVs5SwdcatQ"
    },
    {
        title: "Interior Decorator",
        company: "One walls",
        location: "New York, USA",
        timePosted: "a month",
        description: "One walls is looking for a decorator to add life to their new space in the heart of the United States. Join them...",
        image: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/NQYYqitFsaL57M1rq3y7Fatv"
    },
]

const posts = [
    {
        person: "Nigel Atta-Mensah",
        username: "nigel",
        postId: 1,
        timeMade: "4m",
        message: "NewComma2.0 is coming. brace up💛!",
        likes: 15,
        photos: "",
        comments: [
            {
            person: "Amewu Emmanuel" ,
            username: "holalia",
            message: "🚀",
            timeMade: "3d",
            likes: 0
            }
        ]
    },
    {   
        person: "Natalie Narh",
        username: "natalie",
        postId: 2,
        timeMade:"1h" ,
        message: "Proud of you my sister @nakinarh.",
        photos: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/H59LsazfAwZouNetYnV38QXm",
        comments: [
            {
                person: "" ,
                username: "",
                message: "",
                timeMade: ""
            }
        ]
    },
    {   
        person: "Emeka Indulue",
        username: "emekaindulue",
        postId: 3,
        timeMade:"3d" ,
        message: "I think the idea of proportion most times, and this 'it's always been done this way' mentality, is sort of confining and most importantly a creative killer.  Immerse yourself in the process, let it all out, what's the worse that can happen, what do you have to loose?",
        photos: "",
        comments: [
            {
                person: "" ,
            username: "",
            message: "",
            timeMade: ""
            }
        ]
    },
    {   
        person: "Leslie Arkoful",
        username: "lesliearkoful",
        postId: 4,
        timeMade:"1w" ,
        message: "Take a look at @NewCommaJobs.",
        photos: "",
        comments: [
            {
                person: "" ,
            username: "",
            message: "",
            timeMade: ""
            }
        ]
    },
    {   
        person: "Cyrus John",
        username: "cyrusthrone",
        postId: 5,
        timeMade:"12d" ,
        message: "we must rise as a collective effort to fight marginalization",
        photos: "https://comma-uploads-production.s3.eu-west-2.amazonaws.com/16x3k4wkqcdhaAM9q2yhAuvQ",
        likes: 6,
        comments: [
            {
                person: "" ,
            username: "",
            message: "",
            timeMade: ""
            }
        ]
    },
    ]

    export { users, posts, jobs }