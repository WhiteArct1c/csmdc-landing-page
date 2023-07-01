export interface SwiperComponentProps{
   profiles: ProfilesProps[]
}

export interface ProfilesProps{
   id: number,
   name: string,
   role: string,
   urlAvatar: string,
   socialMedia: SocialMedia[]
}

interface SocialMedia{
   title: string,
   urlIcon: string,
   link: string
}