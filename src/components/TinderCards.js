import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.scss';
import axios from '../axios';

function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req=await axios.get('/tinder/users');
            setPeople(req.data);
        }
        fetchData();
    }, [])

    function swiped(direction,person) {
    }

    function outOfFrame(person) {
    }

    return (
        <div className="tinder_cards">
               <div className="tinder_cards_cont">
                    {people.map((person)=>(
                        <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(direction)=>swiped(direction,person)}
                        onCardLeftScreen={()=>outOfFrame(person)}
                        >
                            <div className="card" style={{backgroundImage : `url(${person.url})`}}>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>     
        </div>
    )
}

export default TinderCards;
