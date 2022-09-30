declare module '*.svg'
declare module '*.png'
declare module '*.png?lqip'
declare module '*.jpeg'
declare module '*.jpeg?lqip'
declare module '*.jpg'
declare module '*.jpg?lqip'

// Texts
interface Texts {
  de: Translation
  en: Translation
  es: Translation
}

// Team member
interface TeamMember {
  name: string
  job: string
  summary: string[]
}

// Images
interface Images {
  hero: {
    video: string
    preview: string
  }
  socialShare: string
  photosAndVideos: string[]
  socialMedia: string[]
  studio: {
    interior: string
    exterior: string
  }
}

interface TranslationWithImages extends Translation {
  images: Images
}

// Translation
interface Translation {
  // Meta tags
  meta: {
    home: {
      pageTitle: string
      pageDescription: string
      // imageSocial: string
    }
    error: {
      pageTitle: string
      pageDescription: string
    }
  }
  // Navbar menu
  navbar: {
    linkCourses: string
    linkPhotos: string
    linkContact: string
    linkHomePage: string
  }
  // Hero
  hero: {
    title: {
      top: string
      middle: string[]
      bottom: string
    }
    intro: string[]
  }
  // Courses
  courses: {
    // Title
    title: string
    // Image
    courses: string
    // PDF card
    pdf: {
      title: string
      // description: string
      button: string
      file: string
    }
    // Registration
    registration: {
      title: string
      text: string[]
    }
    // Pricing
    pricing: {
      title: string
      text: string[]
    }
  }
  // Photos
  photos: {
    // Title
    title: string
  }
  // Team
  team: {
    // Title
    title: string
    // Team members
    teamMembers: TeamMember[]
  }
  // Social Media
  socialMedia: {
    // Title
    title: string
    // Text
    description: string[]
    // Links
    linkInstagram: string
    linkYoutube: string
    linkFacebook: string
  }
  // Contact
  contact: {
    // Title
    title: string
    // Studio
    labelStudioExterior: string
    labelStudioInterior: string
    // Email
    labelEmail: string
    emailAddress: string
    linkEmail: string
    // Phone
    labelPhone: string
    phoneNumber: string
    linkPhone: string
    // Location
    labelAddress: string
    address: {
      streetAndNumber: string
      postcodeAndCity: string
    }
    // Map
    buttonOpenGoogleMaps: string
    linkGoogleMaps: string
  }
  // Footer
  footer: {
    buttonScrollToTop: string
    copyright: string
    madeInDesktop: string
    madeInMobile: string
    linkToLegal: string
  }
  // Error
  error: {
    title: string
    button: string
  }
  // Legal
  legal: {
    title: string
    sections: {
      title: string
      text: string[]
    }[]
  }
}
