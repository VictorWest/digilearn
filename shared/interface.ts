import { CourseCategory, CourseLevel } from "./types"

export interface User {
    userId: string,
    fullName: string,
    login: LoginUser,
    confirmPassword: string
}

export interface LoginUser {
    email: string,
    password: string
}

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
        details?: string,
        occupation?: string,
        profileSrc?: string
    },
    overview: {
        main: string,
        deliverables: string[]
    },
    syllabus: CourseModule[]
}

export interface CourseModule {
  moduleNumber: number,
  moduleName: string,
  totalHours: number,
  lessons: {
      title: string,
      url: string
  }[]
}