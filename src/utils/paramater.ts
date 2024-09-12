export interface AllowedHostDomainParameter {
    [key: string]: string;
  }

export interface TikTokCommentsParamater {
    [key: string]: TikTokComment;
}

export interface TikTokComment {
    comments: Array<string>
}
  