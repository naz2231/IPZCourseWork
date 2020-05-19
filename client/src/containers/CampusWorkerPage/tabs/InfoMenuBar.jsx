import React from 'react';
import { Tab } from 'semantic-ui-react'

import HostelInfo from './infoElements/HostelInfo';
import HostelResidentInfo from './infoElements/HostelResidentInfo';
import ShowInventory from './infoElements/ShowInventory';
import ShowChecks from './infoElements/ShowChecks';
import CountPayments from './infoElements/CountPayments';
import AddHostelResident from './actionElements/AddHostelResident';
import AddInventory from './actionElements/AddInventory';

/**
 * Array of current component's tabs for navigation defined in format approperiate for semantic-ui-react.Tab panes attribute
 */
const panes = [
    { menuItem: 'Hostel info', render: () => <Tab.Pane><HostelInfo /></Tab.Pane> },
    { menuItem: 'Hostel residents info', render: () => <Tab.Pane><HostelResidentInfo /></Tab.Pane> },
    { menuItem: 'Inventories', render: () => <Tab.Pane><ShowInventory /></Tab.Pane> },
    { menuItem: 'Cheques', render: () => <Tab.Pane><ShowChecks /></Tab.Pane> },
    { menuItem: 'Payments', render: () => <Tab.Pane><CountPayments /></Tab.Pane> },
    { menuItem: 'Add hostel resident', render: () => <Tab.Pane><AddHostelResident /></Tab.Pane> },
    { menuItem: 'Add inventory', render: () => <Tab.Pane><AddInventory /></Tab.Pane> },
]

/**
 * component for displaying menu tabs of Campus worker page
 * 
 * @returns (
 *  <InfoMenuBar />
 * )
 */
export default () => <Tab panes={panes} />;
