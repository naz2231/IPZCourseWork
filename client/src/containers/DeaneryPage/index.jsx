import React from 'react';
import { Tab } from 'semantic-ui-react';

import ControlResult from './tabs/ControlResult';
import LessonsSchedule from './tabs/LessonsSchedule';
import SearchPanel from './tabs/SearchPanel';
import SessionSchedule from './tabs/SessionSchedule';
import AddSubject from './tabs/AddSubject'

/**
 * Array of current component's tabs for navigation defined in format approperiate for semantic-ui-react.Tab panes attribute
 */
const panes = [
  { menuItem: 'LessonsSchedule', render: () => <Tab.Pane><LessonsSchedule /></Tab.Pane> },
  { menuItem: 'SessionSchedule', render: () => <Tab.Pane><SessionSchedule /></Tab.Pane> },
  // { menuItem: 'ControlResult', render: () => <Tab.Pane><ControlResult /></Tab.Pane> },
  { menuItem: 'SearchPanel', render: () => <Tab.Pane><SearchPanel /></Tab.Pane> },
  { menuItem: 'Add subject', render: () => <Tab.Pane><AddSubject /></Tab.Pane> },
]

/**
 * component for displaying menu tabs of Deanery
 * 
 * @returns (
 *  <DeaneryPage />
 * )
 */
const DeaneryPage = () => {
  return (
    <div>
      <Tab panes={panes} />
    </div>
  )
};

export default DeaneryPage;
