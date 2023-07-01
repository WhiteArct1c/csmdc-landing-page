import { TeamComponentProps } from "../interfaces/ITeamProps";
import { ProfilesProps } from "../interfaces/ISwiperProps";

const ProfilesItens: ProfilesProps[] = [
   {
      id: 1, 
      name: "WhiteArct1c", 
      role: "Desenvolvedor e Designer",
      socialMedia: [
        {
          title: "github", 
          urlIcon: "/src/assets/icons/github-svgrepo-com.svg",
          link: "https://github.com/WhiteArct1c"
        },
        {
          title: "linkedin", 
          urlIcon: "/src/assets/icons/linkedin-svgrepo-com.svg",
          link: "https://www.linkedin.com/in/whitearct1c/"
        },
        {
          title: "instagram", 
          urlIcon: "/src/assets/icons/instagram-167-svgrepo-com.svg",
          link: "https://www.instagram.com/_whitearctic_/"
        }
      ], 
      urlAvatar: "https://avatars.githubusercontent.com/WhiteArct1c"
    },
    {
      id: 2, 
      name: "Vastor Mundrin", 
      role: "Autor e Mestre",
      socialMedia: [
        {
          title: "instagram", 
          urlIcon: "/src/assets/icons/instagram-167-svgrepo-com.svg",
          link: "https://www.instagram.com/vastormundrin/"
        },
        {
          title: "tiktok", 
          urlIcon: "/src/assets/icons/tiktok-svgrepo-com.svg",
          link: "https://www.tiktok.com/@vastor_mundrin"
        }
      ], 
      urlAvatar: "/src/assets/profile-photos/Vastor-profile.jpeg"
    },
    {
      id: 3, 
      name: "Roni", 
      role: "Ilustrador",
      socialMedia: [
        {
          title: "instagram", 
          urlIcon: "/src/assets/icons/instagram-167-svgrepo-com.svg",
          link: "https://www.instagram.com/inkroni/"
        }
      ], 
      urlAvatar: "/src/assets/profile-photos/Roni_profilePhoto.jpg"
    }
 ]

export const TeamItens: TeamComponentProps = {
   id: "a_equipe",
   title: "A Equipe",
   paragraph: 'Nós somos um time de desenvolvimento que busca constantemente a excelência em nossos projetos (e aqueles críticos nos dados). Nosso time é composto por profissionais diversificados e talentosos, com desenvolvedores experientes em diversas linguagens de programação e designers criativos que sempre pensam fora da caixa. Porém mais do que habilidades técnicas, valorizamos a diversidade de perspectivas e opiniões. Acreditamos que a colaboração e o respeito mútuo são essenciais para o sucesso dos nossos projetos. Se você é um profissional apaixonado por RPG e está sempre em busca de aprendizado e crescimento, junte-se a nós! Aqui, cada um é valorizado pelo seu potencial e contribuição. Venha fazer parte do nosso time e trabalhar em um ambiente colaborativo, onde você pode contribuir com suas habilidades e aprender com outros profissionais talentosos. Vamos construir juntos projetos incríveis!',
   profiles: ProfilesItens,
   linkForm: "https://forms.gle/7DJGBGUMc8Mj1pPt6"
}

