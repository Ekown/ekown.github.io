import wastelander_1 from '../../assets/img/projects/wastelanders-1.jpg';
import portfolio_1 from '../../assets/img/projects/portfolio-1.png';
import bnm_1 from '../../assets/img/projects/bnm-1.png';

export const PROJECTS = [
    {
        name: 'The Wastelander',
        type: 'Final Thesis / Game',
        photos: [
            wastelander_1,
        ],
        stack: ['C#', 'Unity Engine'],
        description: '"The Wastelander" is a 2D side-scrolling game developed using Unity and programmed in C#. The game\'s objective is to guide the player through various environmental puzzles that require proper waste disposal. The player\'s final score is determined by their performance in each puzzle, encouraging players to learn and implement sustainable waste management practices.',
    },
    {
        name: 'My Developer Portfolio',
        type: 'Landing Page',
        photos: [
            portfolio_1,
        ],
        stack: ['React', 'JS', 'HTML', 'CSS'],
        description: 'This React-based developer portfolio website, hosted on Github pages, showcases personal details, skills, and experience. It also highlights several projects, demonstrating competence in various technologies. Mobile-responsive and optimized with SEO elements, it provides an excellent user experience.',
    },
    {
        name: 'BusinessName.com.au',
        type: 'Business Registration Management',
        photos: [
            bnm_1,
        ],
        stack: ['Zend Express', 'JSX', 'CSS'],
        description: 'BusinessName.com.au is a website that provides services for businesses in Australia, including business name registration, ABN application, and filing of business-related documents. The website is designed to be user-friendly and offers a range of resources and support for businesses of all sizes.',
    },
]