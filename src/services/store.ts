import { ICreationInfo } from "@/interfaces/creationInfo";
import IHeroInfo from "@/interfaces/heroInfo";
import IInteractiveInfo from "@/interfaces/interactiveInfo";
import ISocialMediaInfo from "@/interfaces/socialmediaInfo";

const creations: ICreationInfo[] = [
    {
        route: 'deep-earth',
        pictures: {
            mobile: 'images/mobile/image-deep-earth.jpg',
            desktop: 'images/desktop/image-deep-earth.jpg'
        },
        id: 'deep-earth',
        title: 'Deep earth'
    },
    {
        route: 'night-arcade',
        pictures: {
            mobile: 'images/mobile/image-night-arcade.jpg',
            desktop: 'images/desktop/image-night-arcade.jpg'
        },
        id: 'night-arcade',
        title: 'Night arcade'
    },
    {
        route: 'soccer-team',
        pictures: {
            mobile: 'images/mobile/image-soccer-team.jpg',
            desktop: 'images/desktop/image-soccer-team.jpg'
        },
        id: 'soccer-team',
        title: 'Soccer team VR'     
    },
    {
        route: 'grid',
        pictures: {
            mobile: 'images/mobile/image-grid.jpg',
            desktop: 'images/desktop/image-grid.jpg'
        },
        id: 'grid',
        title: 'The grid'
    },
    {
        route: 'from-above',
        pictures: {
            mobile: 'images/mobile/image-from-above.jpg',
            desktop: 'images/desktop/image-from-above.jpg'
        },
        id: 'from-above',
        title: 'From up above VR'

    },
    {
        route: 'pocket-borealis',
        pictures: {
            mobile: 'images/mobile/image-pocket-borealis.jpg',
            desktop: 'images/desktop/image-pocket-borealis.jpg'
        },
        id: 'pocket-borealis',
        title: 'Pocket borealis'
    },
    {
        route: 'curiosity',
        pictures: {
            mobile: 'images/mobile/image-curiosity.jpg',
            desktop: 'images/desktop/image-curiosity.jpg'
        },
        id: 'curiosity',
        title: 'The curiosity'

    },
    {
        route: 'fisheye',
        pictures: {
            mobile: 'images/mobile/image-fisheye.jpg',
            desktop: 'images/desktop/image-fisheye.jpg'
        },
        id: 'fisheye',
        title: 'Make it fisheye'
    }
]


export const fetchCreationsInfo = (): Promise<ICreationInfo[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(creations);
        }, 300); // Simulate network delay
    });
}

const socialMedias: ISocialMediaInfo[] = [
  {
    icon: 'images/icon-facebook.svg',
    name: 'facebook',
    url: "#"
  },
  {
    icon: 'images/icon-twitter.svg',
    name: 'twitter',
    url: "#"
  },
  {
    icon: 'images/icon-pinterest.svg',
    name: 'pinterest',
    url: "#",
  },
  {
    icon: 'images/icon-instagram.svg',
    name: 'ig',
    url: "#"
  }
] 

export const fetchSocialMediasInfo = ():Promise<ISocialMediaInfo[]>=> {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(socialMedias)
        }, 300)
    })

}

const heroInfo: IHeroInfo = {
    caption: 'Immersive experiences that deliver',
    bgMobile: 'images/mobile/image-hero.jpg',
    bgDesktop: 'images/desktop/image-hero.jpg'

}

export const fetchHeroInfo = (): Promise<IHeroInfo> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(heroInfo);
        }, 300); // Simulate network delay
    });
}

const interactiveInfo: IInteractiveInfo= {
    pictureDesktop: 'images/desktop/image-interactive.jpg',
    pictureMobile: 'images/mobile/image-interactive.jpg',
    title: 'The leader in interactive VR',
    text: 'Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.'
}

export const fetchInteractiveInfo = (): Promise<IInteractiveInfo> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(interactiveInfo);
        }, 300); // Simulate network delay
    });
}