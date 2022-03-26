import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='m-3 p-3'>
            <h3>How useState works ?</h3>
            <p>A Hook is a special function that lets you “hook into” React features. Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces.
                useState is a Hook that allows you to have state variables in functional components.
                You pass the initial state to this function and  It returns a pair of values: the current state and a function that updates it.</p>

            <h3>What is the difference between state and props?</h3>
            <p>Props is the short form for properties. props are immutable. props are read only. props can not be modified. state are mutable. state changes can be asynchronous. state can be modified.
                props are used to send information to the child component, Most of the time, your child components are stateless, which means they represent data/information which its parent gives to it.
                On the other hand, the state deals with handling the component itself, the state can be changed within a component with the help of setState and useState hooks.</p>
        </div>
    );
};

export default QuestionAnswer;