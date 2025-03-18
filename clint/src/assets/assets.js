import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.png'
import sample_img_6 from './sample_img_6.png'
import profile_img_1 from './profile_img_1.jpg'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import profile_img_4 from './profile_img_4.jpg'
import profile_img_5 from './profile_img_5.jpg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Sambit Kumar Sahoo',
        role:'MERN Stack Developer',
        stars:5,
        text:`I've been using Genartify for almost a year, mainly for generating creative visuals for my projects. Its ability to turn text prompts into stunning, unique images has been a game-changer for my creative work.`
    },
    {
        image:profile_img_2,
        name:'Ratikanta Pradhan',
        role:'Software Engineer',
        stars:4,
        text:`Genartify has been my trusted tool for over a year, helping me create beautiful and customizable images just from text inputs. It's incredibly intuitive and perfect for bringing imaginative ideas to life.`
    },
    {
        image:profile_img_3,
        name:'Dharmaraj Pradhan',
        role:' Frontend Developer',
        stars:5,
        text:`I've been using Genartify Text-to-Image Generator for over a year, especially for conceptual designs. Its straightforward interface and quick results make it a fantastic tool for visualizing ideas effortlessly.`
    },
    {
      image:profile_img_4,
      name:'Sunami Swayamprava Mohanty',
      role:' Frontend Developer',
      stars: 4,
      text: 'Genartify has been my favorite tool for creating images from text. It has helped me create visually appealing and unique designs for my clients.'
    },
    {
      image:profile_img_5,
      name:'Atul Anshuman Barik',
      role:'Java Developer',
      stars: 5,
      text: 'Genartify has been a game-changer for my creative work. It has been a game-changer for my creative work. It has been a game-changer for my creative work.'
    }
]

export const plans = [
    {
      id: 'Basic',
      price: 49,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 99,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 499,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]