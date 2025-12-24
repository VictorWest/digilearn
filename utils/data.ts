export interface Course {
    imageUrl: string,
    price: number,
    title: string,
    tutor: string,
    rating: number
}

export const featuredCoursesArray: Course[] = [
    {
        imageUrl: "/temp/course-1.jpg",
        price: 99.99,
        title: "Complete Python Programming Masterclass for Beginners",
        tutor: "Dr. Angela Yu",
        rating: 4.8
    },
    {
        imageUrl: "/temp/course-2.jpg",
        price: 129.99,
        title: "Web Development Bootcamp: HTML, CSS, JavaScript & React",
        tutor: "Colt Steele",
        rating: 4.7
    },
    {
        imageUrl: "/temp/course-3.jpg",
        price: 149.99,
        title: "Mastering Data Science with R and Python",
        tutor: "Kirill Eremenko",
        rating: 4.9
    },
    {
        imageUrl: "/temp/course-4.jpg",
        price: 79.99,
        title: "Graphic Design Fundamentals: Adobe Photoshop & Illustrator",
        tutor: "Daniel Scott",
        rating: 4.6
    },
    {
        imageUrl: "/temp/course-5.jpg",
        price: 119.99,
        title: "Artificial Intelligence A-Z: Learn How To Build An AI",
        tutor: "Hadelin de Ponteves",
        rating: 4.8
    },
    {
        imageUrl: "/temp/course-6.jpg",
        price: 0.00,
        title: "Digital Marketing Masterclass: SEO, Social Media & More",
        tutor: "Rob Percival",
        rating: 4.7
    }
]

export const mainReview = {
    review: "DigiLearn transformed my career path. The courses are incredibly thorough, and the instructors are truly passionate. I've gained practical skills that immediately applied to my job.",
    author: "Joseph Hasan",
    jobTitle: "Software Engineer"
}