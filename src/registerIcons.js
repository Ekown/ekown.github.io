import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { USED_FONTS } from './core/constants/used-fonts';

export default function registerIcons() {
    library.add(faB, ...USED_FONTS);
}