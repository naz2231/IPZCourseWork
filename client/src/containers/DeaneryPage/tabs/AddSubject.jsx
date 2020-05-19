import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';

import { 
  academicData,
  disciplineData,
  groupData,
  lessonData,
  subjectTeachingData,
  cathedraEmployeeData,
  auditoriumData,
} from './../../../db/database';

// Returns an info about teacher
const teachers = academicData.map(({ id, firstname, lastname }) => {
  return { key: id, text: firstname + ' ' + lastname, value: firstname + ' ' + lastname }
});

//Returns data about discipline
const disciplines = disciplineData.map(({ id, title }) => {
  return { key: id, text: title, value: title }
})

const groups = groupData.map(({ id, title }) => {
  return { key: id, text: title, value: title }
})

let i = 100;

/**
* Component for adding a new subject
* 
* @returns (
*  <AddSubject />
* )
*/
const AddSubject = () => {
  const [currentTeacher, setCurrentTeacher] = useState(teachers[0]);
  const [auditorium, setAudorium] = useState(0);
  const [currentDiscipline, setCurrentDiscipline] = useState(disciplines[0]);
  const [currentGroup, setCurrentGroup] = useState(groups[0]);
  const [currentDate, setCurrentDate] = useState('08:30:00');

  const onSubmit = e => {
    e.preventDefault();

    if (auditorium < 1 || currentDate === '') {
      alert('Empty fields')
      return
    }

    const { id: cathEmployeeId } = cathedraEmployeeData.find(({ academicId }) => academicId === currentTeacher.key);
    const { id: subjectTeachingId } = subjectTeachingData.find(({ disciplineId, cathedraEmployeeId }) => {
      return currentDiscipline.key === disciplineId && cathEmployeeId === cathedraEmployeeId
    })
    const aud = auditoriumData.find(({ number }) => number === Number(auditorium))
    if (!aud) {
      alert('No such auditorium number')
      return
    }

    lessonData.push({
      id: i++,
      subjectTeachingId: subjectTeachingId,
      day: 'fri',
      time: currentDate,
      auditoriumId: aud.id
    })
    setCurrentTeacher(teachers[0]);
    setAudorium(0);
    setCurrentDiscipline(disciplines[0]);
    setCurrentGroup(groups[0])
    setCurrentDate('08:30:00');
    console.log(lessonData)
  }
  return (
    <div style={{ display: 'flex', margin: '0 auto', flexDirection: 'column', width: '500px' }}>
      <label><h4>Teacher</h4></label>
      <Dropdown
        placeholder='Select teacher'
        selection
        options={teachers}
        value={currentTeacher.value}
        onChange={(e, value) => setCurrentTeacher(value)}
        style={{ margin: '12px 0 20px 0' }}
      />
      <label><h4>Audotorium</h4></label>
      <Input 
        value={auditorium}
        onChange={e => setAudorium(e.target.value)}
        placeholder="Enter audotorium number"
        type="number"
        style={{ margin: '12px 0 20px 0' }}
      />
      <label><h4>Discipline</h4></label>
      <Dropdown
        placeholder='Select discipline'
        selection
        options={disciplines}
        value={currentDiscipline.value}
        onChange={(e, value) => setCurrentDiscipline(value)}
        style={{ margin: '12px 0 20px 0' }}
      />
      <label><h4>Group</h4></label>
      <Dropdown
        placeholder='Select group'
        selection
        options={groups}
        value={currentGroup.value}
        onChange={(e, value) => setCurrentGroup(value)}
        style={{ margin: '12px 0 20px 0' }}
      />
      <label><h4>Date</h4></label>
      <Input 
        value={currentDate}
        onChange={e => setCurrentDate(e.target.value)}
        placeholder="Enter date"
        style={{ margin: '12px 0 20px 0' }}
      />
      <Button onClick={onSubmit} floated="right">Submit</Button>
    </div>
  )
}

export default AddSubject;
