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

import fpc_mobile_1 from '../../assets/img/projects/fpc-mobile-1.png';
import fpc_mobile_2 from '../../assets/img/projects/fpc-mobile-2.png';
import fpc_mobile_3 from '../../assets/img/projects/fpc-mobile-3.png';
import fpc_mobile_4 from '../../assets/img/projects/fpc-mobile-4.png';
import fpc_mobile_5 from '../../assets/img/projects/fpc-mobile-5.png';

import portal_1 from '../../assets/img/projects/portal-1.png';

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
        site: '',
        source: 'https://github.com/Ekown/The-Wastelander',
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
        site: '',
        source: 'https://github.com/Ekown/ekown.github.io',
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
        site: 'https://businessname.com.au/',
        source: '',
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
        site: 'https://crmprod.fpc.com.au/',
        source: '',
        stack: ['SugarCRM', 'PHP', 'JS', 'Handlebars'],
        description: 'A SugarCRM instance for Family Pet Care includes standard Sugar functionalities with additional features like an order wizard, pricebook management, products cataloging, and opportunity status tracking. It\'s designed to help the company manage its customer relationships more efficiently and streamline its sales process.',
    },
    {
        name: 'FPC Driver App',
        type: 'Mobile App',
        photos: [
            fpc_mobile_1,
            fpc_mobile_2,
            fpc_mobile_3,
            fpc_mobile_4,
            fpc_mobile_5,
        ],
        site: '',
        source: '',
        stack: ['Ionic', 'Angular', 'JS', 'Lumen'],
        description: 'The Family Pet Care mobile app, built using Ionic, Angular, and Capacitor, is designed for drivers in the field. The app enables simple order management, allows drivers to create orders, scan QR tags, and features a driver map to track orders in real-time. It\'s a cross-platform mobile app that is easy to use and helps streamline operations for Family Pet Care.',
    },
    {
        name: 'FPC Vet Portal',
        type: 'Portal',
        photos: [
            portal_1,
        ],
        site: 'https://portal.lawnswood.com.au/',
        source: '',
        stack: ['React', 'JSX', 'Lumen'],
        description: 'The Family Pet Care portal site, built with React and Lumen, is designed for vet clients. The site provides a user-friendly interface for pet owners to access their pet\'s medical records, schedule appointments, and communicate with their vet. It\'s a secure and efficient way for clients to manage their pet\'s health with Family Pet Care.',
    },
]