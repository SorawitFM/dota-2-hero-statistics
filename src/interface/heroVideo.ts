export interface IHeroVideo {
    kind: string
    etag: string
    videos: Video[]
}

export interface Video {
    id: string
    kind: string
    etag: string
    snippet: Snippet
    contentDetails: ContentDetails
    statistics: Statistics
    status: Status
}

export interface Snippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Thumbnails
    categoryId: string
}

export interface Thumbnails {
    default: Default
    medium: Medium
    high: High
}

export interface Default {
    url: string
}

export interface Medium {
    url: string
}

export interface High {
    url: string
}

export interface ContentDetails {
    duration: string
    aspectRatio: string
}

export interface Statistics {
    viewCount: string
    likeCount: string
    dislikeCount: string
    favoriteCount: string
    commentCount: string
}

export interface Status {
    uploadStatus: string
    privacyStatus: string
}
