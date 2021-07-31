import React from "react";
import {format, isFuture, parseISO} from 'date-fns'

import {graphql, StaticQuery} from 'gatsby'

const event = ({id, startTime, endTime, location}) => {
  return (
    <li key={id}>
      {format(startTime, "eeee, MMMM")} <span className="ordinal">{format(startTime, "do")}</span>, {format(startTime, "h:mm aa")} to {format(endTime, "h:mm aa")} at <a href={location.directions}>{location.name}</a>.
    </li>
  )
}

const createDate = ({node: {id, location, startTime, endTime}}) => ({
  id,
  location,
  startTime: parseISO(startTime),
  endTime: parseISO(endTime),
})

export const Schedule = () => (
  <StaticQuery query={graphql`
      query ScheduleQuery {
        allMeetingsJson {
          edges {
            node {
              id
              startTime
              endTime
              location {
                name
                directions
              }
            }
          }
        }
      }
    `}
    render={data => {
      const dates = data
        .allMeetingsJson
        .edges
        .map(createDate)
        .filter(({endTime}) => isFuture(endTime))
        .sort((a, b) => a.endTime - b.endTime)

      let body;
      if (dates.length) {
        body = <ul>{dates.map(event)}</ul>
      } else {
        body = <p>No meetings are currently scheduled.</p>
      }

      return (
        <section className="text-left clear-both">
          <h2>Upcoming Meeting Times</h2>
          {body}
        </section>
      )
    }}
  />
)

