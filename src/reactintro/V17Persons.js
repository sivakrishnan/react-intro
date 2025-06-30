import React from 'react'

export default function V17Persons(props) {
    const person = props.person;
    return (
        <div>
            <h2>From Person Component- I am {person.name} and I am {person.age} years old with skill set of {person.skill}</h2>
        </div>
    )
}
