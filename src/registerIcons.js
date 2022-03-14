import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowRight,
    faB
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
    // @TODO Move the list of used icons to a separate constants file
    const arUsedIcons = [
        faArrowRight,
    ];
      
    library.add(faB, ...arUsedIcons);
}