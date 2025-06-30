import React from 'react'
import V17Persons from './V17Persons'

export default function V17NameList() {
    const persons = [
        {
            id: 1,
            name: 'skrish1',
            age: 31,
            skill: 'skill1'
        },
        {
            id: 2,
            name: 'skrish2',
            age: 32,
            skill: 'skill2'
        },
        {
            id: 3,
            name: 'skrish3',
            age: 33,
            skill: 'skill3'
        },
        {
            id: 4,
            name: 'skrish4',
            age: 34,
            skill: 'skill4'
        }
    ]
    const names = ['skrish1', 'skrish2', 'skrish3']
    const nameList = names.map((name, index) => <h2 key={index}>{index}-{name}</h2>)
    const personList = persons.map(person => <V17Persons key={person.id} person={person}></V17Persons>)
    return (
        <div>
            {
                nameList
            }
            {
                personList
            }
        </div>
    )
}
