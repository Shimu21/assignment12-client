import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <div>
            <h1>Our Programs</h1>
            <ul className="p-2">
                <li><Link to="/infant">Infant</Link></li>
                <li><Link to="/toddler">Toddler</Link></li>
                <li><Link to="/preschool">Preschool</Link></li>
                <li><Link to="/kindergarten">Kingdergarten Prep</Link></li>
            </ul>
        </div>
    );
};

export default Programs;