import { ISocialMediaButtons } from "../interfaces/ISocialMediaButtons";
import DiscordImage from '../../assets/discord_button.svg';
import InstagramImage from '../../assets/instagram_button.svg';
import GithubImage from '../../assets/github_button.svg';
import TwitchImage from '../../assets/Twitch_button.svg';

export const SocialMediaItens:ISocialMediaButtons = {
   icons: [
      {  
         title: "Discord icon",
         srcIcon: DiscordImage,
         linkSocialMedia: "https://discord.gg/j5AwCjFk6G"
      },
      {
         title: "Instagram icon",
         srcIcon: InstagramImage,
         linkSocialMedia: "https://www.instagram.com/coroasombria/"
      },
      {
         title: "Github icon",
         srcIcon: GithubImage,
         linkSocialMedia: "https://github.com/WhiteArct1c/csmdc-landing-page"
      },
      {
         title: "Twitch icon",
         srcIcon: TwitchImage,
         linkSocialMedia: "https://www.twitch.tv/vastor_mundrin"
      }
   ]
}