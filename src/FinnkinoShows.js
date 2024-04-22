import React, { useState, useEffect} from "react";

const FinnkinoShows= () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.finnkino.fi/xml/Schedule/');
                if(!response.ok) {
                    throw new Error('ERROR');
                }
                const xmlText = await response.text();
                const parser = new DOMParser();
                const xmlData = parser.parseFromString(xmlText, 'text/xml');
                const shows = xmlData.getElementsByTagName('Show');
                const parsedSchedule = Array.from(shows).map((show) => ({
                    title: show.getElementsByTagName('Title')[0].textContent,
                    start: show.getElementsByTagName('dttmShowStart')[0].textContent,
                    end: show.getElementsByTagName('dttmShowEnd')[0].textContent,
                    auditorium: show.getElementsByTagName('Theatre')[0].textContent,
                }));
                setSchedule(parsedSchedule);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    if (loading) return <p> Ladataan...</p>;
    if (error) return <p>Virhe: {error.message}</p>

    return (
        <div>
            <ul>
                {schedule.map((show, index) => (
                    <li key={index}>
                        <h2> {show.title} </h2>
                        <p> Alkaa: {show.start} </p>
                        <p> Loppuu: {show.end} </p>
                        <p> Teatteri: {show.auditorium} </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FinnkinoShows;
