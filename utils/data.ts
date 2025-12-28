export interface Course {
    courseId: string | number,
    imageUrl: string,
    price: number,
    title: string,
    tutor: string,
    rating: number,
    category: CourseCategory,
    level: CourseLevel,
    reviews: number 
}

export interface CourseDetail {
    courseId: string | number,
    title: string,
    stat: {
        rating: number,
        reviews: number,
        students: number,
        totalHours: number,
        numberOfLectures: number
    },
    tutor: {
        name: string,
        details: string,
        occupation: string
    },
    overview: {
        main: string,
        deliverables: string[]
    },
    syllabus: {
        moduleNumber: number,
        moduleName: string,
        totalHours: number,
        lessons: {
            title: string,
            url: string
        }[]
    }[]
}

export const featuredCoursesArray: Course[] = [
  {
    courseId: "yt-react-001",
    imageUrl: "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    price: 0,
    title: "React.js Full Course for Beginners",
    tutor: "freeCodeCamp.org",
    rating: 4.8,
    category: "Web Development",
    level: "Beginner",
    reviews: 12450
  },
  {
    courseId: "yt-node-001",
    imageUrl: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    price: 0,
    title: "Node.js & Express Backend Development",
    tutor: "Traversy Media",
    rating: 4.7,
    category: "Web Development",
    level: "Intermediate",
    reviews: 8930
  },
  {
    courseId: "yt-python-001",
    imageUrl: "https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    price: 0,
    title: "Python Programming – Full Course",
    tutor: "freeCodeCamp.org",
    rating: 4.9,
    category: "Data Science",
    level: "Beginner",
    reviews: 20100
  }
]

export const courseDetails: CourseDetail[] = [
  {
    courseId: "yt-react-001",
    title: "React.js Full Course for Beginners",
    stat: {
      rating: 4.8,
      reviews: 12450,
      students: 350000,
      totalHours: 12.5,
      numberOfLectures: 42
    },
    tutor: {
      name: "freeCodeCamp.org",
      details:
        "freeCodeCamp provides free, high-quality coding education used by millions of developers worldwide.",
      occupation: "Non-profit Coding Education Platform"
    },
    overview: {
      main:
        "This course provides a complete introduction to React.js, covering core concepts, hooks, state management, and real-world project patterns.",
      deliverables: [
        "Build reusable React components",
        "Understand JSX, props, and state",
        "Use React Hooks effectively",
        "Create a complete frontend project"
      ]
    },
    syllabus: [
      {
        moduleNumber: 1,
        moduleName: "React Fundamentals",
        totalHours: 3.5,
        lessons: [
          {
            title: "What is React & Why Use It?",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8"
          },
          {
            title: "JSX and Rendering Elements",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=1200s"
          },
          {
            title: "Components and Props",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=2600s"
          }
        ]
      },
      {
        moduleNumber: 2,
        moduleName: "State, Events & Hooks",
        totalHours: 4,
        lessons: [
          {
            title: "useState Hook Explained",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=5200s"
          },
          {
            title: "Handling Events in React",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=6800s"
          },
          {
            title: "useEffect for Side Effects",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=8200s"
          }
        ]
      },
      {
        moduleNumber: 3,
        moduleName: "Building a Mini Project",
        totalHours: 5,
        lessons: [
          {
            title: "Project Setup & Folder Structure",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=10000s"
          },
          {
            title: "Connecting Components",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=11500s"
          },
          {
            title: "Final UI Polish & Deployment Tips",
            url: "https://www.youtube.com/watch?v=bMknfKXIFA8&t=13500s"
          }
        ]
      }
    ]
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