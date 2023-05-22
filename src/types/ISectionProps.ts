export interface ISectionProps{
   id: string,
   paragraph: {
      title: string,
      text: string
   },
   image: {
      srcImage: string,
      title: string
   }
   isReversed: boolean,
   imgSize?: string,
   animationStart: string
}