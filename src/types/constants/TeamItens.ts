import { TeamComponentProps } from "../interfaces/ITeamProps";
import { ProfilesProps } from "../interfaces/ISwiperProps";

const ProfilesItens: ProfilesProps[] = [
   {
      id: 1, 
      name: "Matheus", 
      socialMedia: [
        {
          title: "", 
          urlIcon: "",
          link: ""
        }
      ], urlAvatar: ""
    },
    {
      id: 2, 
      name: "Vastor", 
      socialMedia: [
        {
          title: "", 
          urlIcon: "",
          link: ""
        }
      ], urlAvatar: ""
    },
    {
      id: 3, 
      name: "Roni", 
      socialMedia: [
        {
          title: "", 
          urlIcon: "",
          link: ""
        }
      ], urlAvatar: ""
    }
 ]

export const TeamItens: TeamComponentProps = {
   id: "a_equipe",
   title: "A Equipe",
   paragraph: 'Nós somos um time de desenvolvimento que busca constantemente a excelência em nossos projetos (e aqueles críticos nos dados). Nosso time é composto por profissionais diversificados e talentosos, com desenvolvedores experientes em diversas linguagens de programação e designers criativos que sempre pensam fora da caixa. Porém mais do que habilidades técnicas, valorizamos a diversidade de perspectivas e opiniões. Acreditamos que a colaboração e o respeito mútuo são essenciais para o sucesso dos nossos projetos. Se você é um profissional apaixonado por RPG e está sempre em busca de aprendizado e crescimento, junte-se a nós! Aqui, cada um é valorizado pelo seu potencial e contribuição. Venha fazer parte do nosso time e trabalhar em um ambiente colaborativo, onde você pode contribuir com suas habilidades e aprender com outros profissionais talentosos. Vamos construir juntos projetos incríveis!',
   profiles: ProfilesItens
}

