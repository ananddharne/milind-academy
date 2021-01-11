/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.aboutus`,
    defaultMessage: 'About Us',
  },
  engineering: {
    id: `${scope}.engineering`,
    defaultMessage: 'Engineering',
  },
  diploma: {
    id: `${scope}.diploma`,
    defaultMessage: 'Diploma',
  },
  timetable: {
    id: `${scope}.timetable`,
    defaultMessage: 'Timetable',
  },
  downloads: {
    id: `${scope}.downloads`,
    defaultMessage: 'Downloads',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact Us',
  },
});
