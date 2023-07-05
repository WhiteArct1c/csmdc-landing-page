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
   isreversed: boolean,
   imgsize?: string,
   animationStart: string
}