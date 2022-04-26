import { AppConfig } from "./config"
import type { ProjectId } from "./domain"

export const PROJECT_IDS: readonly ProjectId[] = ["chinstrap"] as const

export const PROJECTS_WITH_GALLERY: ProjectId[] = ["chinstrap"]

export const GALLERY_ITEMS_COUNT_PER_PAGE = 5

interface SocialLink {
    url: string
    xlinkHref: string
    appearsInHeader: boolean
    appearsInFooter: boolean
}
export const SOCIAL_LINKS: { [name: string]: SocialLink } = {
    Twitter: {
        url: AppConfig.chinstrap.urls.twitter,
        xlinkHref: "#icon-twitter",
        appearsInHeader: true,
        appearsInFooter: true,
    },
    GitHub: {
        url: AppConfig.chinstrap.urls.github,
        xlinkHref: "#icon-github",
        appearsInHeader: true,
        appearsInFooter: true,
    },
    Telegram: {
        url: AppConfig.chinstrap.urls.telegram,
        xlinkHref: "#icon-discourse",
        appearsInHeader: true,
        appearsInFooter: true,
    },
} as const
