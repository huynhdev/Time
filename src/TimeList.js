import React, { useState } from 'react';
import moment from 'moment-timezone';

const LIST = [
  {
    title: 'Vietnam',
    zone: 'Asia/Ho_Chi_Minh',
    offset: '+7',
  },
  {
    title: 'New York',
    zone: 'America/New_York',
    offset: '-4',
  },
  {
    title: 'Los Angels',
    zone: 'America/Los_Angeles',
    offset: '-7',
  }
]

function TimeList() {
  const [ timeUtc, setTimeUtc ] = useState(moment().utc().format())

  const handleChange = (hour, timezone) => {
    const currentTime = moment().tz(timezone);
    const newTime = currentTime.set({ hours: hour });
    setTimeUtc(newTime.utc())
  }

  return (
    <div style={{
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#9BCC40',
      padding: 10,
    }}>
      {
        LIST.map( item => (
          <div
            key={item.zone}
            style={{ 
              backgroundColor: '#113953',
              padding: '10px 5px',
              margin: '5px 0',
            }}
          >
            <div
              style={{
                color: '#FFFD37',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {`${item.title} (${item.offset})`}
            </div>
            <select
              style={{ fontSize: 14 }}
              value={moment.tz(timeUtc, item.zone).hour()}
              onChange={(event) => handleChange(event.target.value, item.zone)}
            >
              {
                Array.from(Array(24), (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))
              }
            </select>
          </div>
        ))
      }
    </div>
  );
}

export default TimeList;
