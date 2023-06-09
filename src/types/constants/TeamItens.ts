import { TeamComponentProps } from "../interfaces/ITeamProps";
import { ProfilesProps } from "../interfaces/ISwiperProps";
import InstagramIcon from '../../assets/icons/instagram-167-svgrepo-com.svg';
import TiktokIcon from '../../assets/icons/tiktok-svgrepo-com.svg';
import GithubIcon from '../../assets/icons/github-svgrepo-com.svg';
import LinkedinIcon from '../../assets/icons/linkedin-svgrepo-com.svg';
import VastorProfileImage from '../../assets/profile-photos/Vastor-profile.jpeg';
import RoniProfileImage from '../../assets/profile-photos/roni_perfil.jpg';

const ProfilesItens: ProfilesProps[] = [
  {
    id: 1, 
    name: "Vastor Mundrin", 
    role: "Autor e Mestre",
    socialMedia: [
      {
        title: "instagram", 
        urlIcon: InstagramIcon,
        link: "https://www.instagram.com/vastormundrin/"
      },
      {
        title: "tiktok", 
        urlIcon: TiktokIcon,
        link: "https://www.tiktok.com/@vastor_mundrin"
      }
    ], 
    urlAvatar: VastorProfileImage
  },
  {
    id: 2, 
    name: "WhiteArct1c", 
    role: "Desenvolvedor e Designer",
    socialMedia: [
      {
        title: "github", 
        urlIcon: GithubIcon ,
        link: "https://github.com/WhiteArct1c"
      },
      {
        title: "linkedin", 
        urlIcon: LinkedinIcon,
        link: "https://www.linkedin.com/in/whitearct1c/"
      },
      {
        title: "instagram", 
        urlIcon: InstagramIcon,
        link: "https://www.instagram.com/_whitearctic_/"
      }
    ], 
    urlAvatar: "https://avatars.githubusercontent.com/WhiteArct1c"
  },
  {
    id: 3, 
    name: "Roni", 
    role: "Ilustrador",
    socialMedia: [
      {
        title: "instagram", 
        urlIcon: InstagramIcon,
        link: "https://www.instagram.com/inkroni/"
      }
    ], 
    urlAvatar: RoniProfileImage
  }
 ]

export const TeamItens: TeamComponentProps = {
   id: "a_equipe",
   title: "A Equipe",
   paragraph: 'Nós somos um time de desenvolvimento que busca constantemente a excelência em nossos projetos (e aqueles críticos nos dados). Nosso time é composto por profissionais diversificados e talentosos, com desenvolvedores experientes em diversas linguagens de programação e designers criativos que sempre pensam fora da caixa. Porém mais do que habilidades técnicas, valorizamos a diversidade de perspectivas e opiniões. Acreditamos que a colaboração e o respeito mútuo são essenciais para o sucesso dos nossos projetos. Se você é um profissional apaixonado por RPG e está sempre em busca de aprendizado e crescimento, junte-se a nós! Aqui, cada um é valorizado pelo seu potencial e contribuição. Venha fazer parte do nosso time e trabalhar em um ambiente colaborativo, onde você pode contribuir com suas habilidades e aprender com outros profissionais talentosos. Vamos construir juntos projetos incríveis!',
   profiles: ProfilesItens,
   linkForm: "https://forms.gle/7DJGBGUMc8Mj1pPt6"
}

