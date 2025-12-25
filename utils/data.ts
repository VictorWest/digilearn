export interface Course {
    imageUrl: string,
    price: number,
    title: string,
    tutor: string,
    rating: number,
    category: CourseCategory,
    level: CourseLevel,
    reviews: number 
}

export const featuredCoursesArray: Course[] = [
    {
        imageUrl: "/temp/course-1.jpg",
        price: 99.99,
        title: "Complete Python Programming Masterclass for Beginners",
        tutor: "Dr. Angela Yu",
        rating: 4.8,
        category: "Web Development",
        level: "Beginner",
        reviews: 4589
    },
    {
        imageUrl: "/temp/course-2.jpg",
        price: 129.99,
        title: "Web Development Bootcamp: HTML, CSS, JavaScript & React",
        tutor: "Colt Steele",
        rating: 4.7,
        category: "Web Development",
        level: "Beginner",
        reviews: 908
    },
    {
        imageUrl: "/temp/course-3.jpg",
        price: 149.99,
        title: "Mastering Data Science with R and Python",
        tutor: "Kirill Eremenko",
        rating: 4.9,
        category: "Data Science",
        level: "Intermediate",
        reviews: 273
    },
    {
        imageUrl: "/temp/course-4.jpg",
        price: 79.99,
        title: "Graphic Design Fundamentals: Adobe Photoshop & Illustrator",
        tutor: "Daniel Scott",
        rating: 4.6,
        category: "Graphic Design",
        level: "Beginner",
        reviews: 983
    },
    {
        imageUrl: "/temp/course-5.jpg",
        price: 119.99,
        title: "Artificial Intelligence A-Z: Learn How To Build An AI",
        tutor: "Hadelin de Ponteves",
        rating: 4.8,
        category: "Machine Learning",
        level: "Intermediate",
        reviews: 3829
    },
    {
        imageUrl: "/temp/course-6.jpg",
        price: 0.00,
        title: "Digital Marketing Masterclass: SEO, Social Media & More",
        tutor: "Rob Percival",
        rating: 4.7,
        category: "Digital Marketing",
        level: "Advanced",
        reviews: 291
    }
]

export const mainReview = {
    review: "DigiLearn transformed my career path. The courses are incredibly thorough, and the instructors are truly passionate. I've gained practical skills that immediately applied to my job.",
    author: "Joseph Hasan",
    jobTitle: "Software Engineer"
}

export const courseCategories = [
    "Web Development",
    "Data Science",
    "Graphic Design",
    "Digital Marketing",
    "Business & Entrepreneurship",
    "Photography & Videography",
    "Cybersecurity",
    "Machine Learning"
] as const

export type CourseCategory = typeof courseCategories[number]

export const courseLevels = ["Beginner", "Intermediate", "Advanced", "Expert"] as const
export type CourseLevel = typeof courseLevels[number]