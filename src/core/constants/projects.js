import wastelander_1 from '../../assets/img/projects/wastelanders-1.png';
import wastelander_2 from '../../assets/img/projects/wastelanders-2.png';
import wastelander_3 from '../../assets/img/projects/wastelanders-3.png';
import wastelander_4 from '../../assets/img/projects/wastelanders-4.png';
import wastelander_5 from '../../assets/img/projects/wastelanders-5.png';
import wastelander_6 from '../../assets/img/projects/wastelanders-6.png';

import portfolio_1 from '../../assets/img/projects/portfolio-1.png';
import portfolio_2 from '../../assets/img/projects/portfolio-2.png';
import portfolio_3 from '../../assets/img/projects/portfolio-3.png';

import bnm_1 from '../../assets/img/projects/bnm-1.png';
import bnm_2 from '../../assets/img/projects/bnm-2.png';
import bnm_3 from '../../assets/img/projects/bnm-3.png';
import bnm_4 from '../../assets/img/projects/bnm-4.png';

import sugar_1 from '../../assets/img/projects/sugar-1.png';
import sugar_2 from '../../assets/img/projects/sugar-2.png';
import sugar_3 from '../../assets/img/projects/sugar-3.png';
import sugar_4 from '../../assets/img/projects/sugar-4.png';
import sugar_5 from '../../assets/img/projects/sugar-5.png';

// TODO: Add way so that we can just import all the pictures in a directory without referencing every image
export const PROJECTS = [
    {
        name: 'The Wastelander',
        type: 'Final Thesis / Game',
        photos: [
            wastelander_1,
            wastelander_2,
            wastelander_3,
            wastelander_4,
            wastelander_5,
            wastelander_6,
        ],
        stack: ['C#', 'Unity Engine'],
        description: '"The Wastelander" is a 2D side-scrolling game developed using Unity and programmed in C#. The game\'s objective is to guide the player through various environmental puzzles that require proper waste disposal. The player\'s final score is determined by their performance in each puzzle, encouraging players to learn and implement sustainable waste management practices.',
    },
    {
        name: 'My Developer Portfolio',
        type: 'Landing Page',
        photos: [
            portfolio_1,
            portfolio_2,
            portfolio_3,
        ],
        stack: ['React', 'JS', 'HTML', 'CSS'],
        description: 'This React-based developer portfolio website, hosted on Github pages, showcases personal details, skills, and experience. It also highlights several projects, demonstrating competence in various technologies. Mobile-responsive and optimized with SEO elements, it provides an excellent user experience.',
    },
    {
        name: 'BusinessName.com.au',
        type: 'Business Registration Management',
        photos: [
            bnm_1,
            bnm_2,
            bnm_3,
            bnm_4,
        ],
        stack: ['Zend Express', 'JSX', 'CSS'],
        description: 'BusinessName.com.au is a website that provides services for businesses in Australia, including business name registration, ABN application, and filing of business-related documents. The website is designed to be user-friendly and offers a range of resources and support for businesses of all sizes.',
    },
    {
        name: 'FPC SugarCRM',
        type: 'Customer Relationship Management',
        photos: [
            sugar_1,
            sugar_2,
            sugar_3,
            sugar_4,
            sugar_5,
        ],
        stack: ['SugarCRM', 'PHP', 'JS', 'Handlebars'],
        description: 'A SugarCRM instance for Family Pet Care includes standard Sugar functionalities with additional features like an order wizard, pricebook management, products cataloging, and opportunity status tracking. It\'s designed to help the company manage its customer relationships more efficiently and streamline its sales process.',
    },
]