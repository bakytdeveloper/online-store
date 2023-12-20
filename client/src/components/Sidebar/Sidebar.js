




// // client/src/components/Sidebar/Sidebar.js
// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
//
// const Sidebar = ({ onTypeSelect, onDirectionSelect }) => {
//     const [directions, setDirections] = useState([]);
//     const [types, setTypes] = useState([]);
//     const [selectedType, setSelectedType] = useState(null);
//     const [selectedDirection, setSelectedDirection] = useState(null);
//     const [displayMode, setDisplayMode] = useState('directions');
//
//     useEffect(() => {
//         const fetchDirections = async () => {
//             try {
//                 const response = await fetch('http://localhost:5500/api/products/directions');
//                 if (!response.ok) {
//                     throw new Error(`Error fetching directions: ${response.statusText}`);
//                 }
//
//                 const data = await response.json();
//
//                 console.log('Received directions data:', data);
//
//                 if (Array.isArray(data)) {
//                     setDirections(data);
//                 } else {
//                     console.error('Invalid data format for directions:', data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching directions:', error.message);
//             }
//         };
//
//         const fetchTypes = async () => {
//             try {
//                 const response = await fetch('http://localhost:5500/api/products/types');
//                 if (!response.ok) {
//                     throw new Error(`Error fetching types: ${response.statusText}`);
//                 }
//
//                 const data = await response.json();
//
//                 console.log('Received types data:', data);
//
//                 if (Array.isArray(data)) {
//                     setTypes(data);
//                 } else {
//                     console.error('Invalid data format for types:', data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching types:', error.message);
//             }
//         };
//
//         fetchDirections();
//         fetchTypes();
//     }, []);
//
//     const handleTypeClick = (type) => {
//         setSelectedType(type);
//         onTypeSelect && onTypeSelect(type);
//         setDisplayMode('types');
//     };
//
//     const handleDirectionClick = (direction) => {
//         setSelectedDirection(direction);
//         onDirectionSelect && onDirectionSelect(direction);
//         setDisplayMode('types');
//     };
//
//     const handleShowAllClick = () => {
//         setSelectedType(null);
//         setSelectedDirection(null);
//         onTypeSelect && onTypeSelect(null);
//         onDirectionSelect && onDirectionSelect(null);
//         setDisplayMode('directions');
//     };
//
//     return (
//         <aside className="sidebar">
//             <h2>Тип товара</h2>
//             <ul>
//                 <li
//                     className={displayMode === 'directions' ? 'selected' : undefined}
//                     onClick={handleShowAllClick}
//                 >
//                     Все товары
//                 </li>
//                 {displayMode === 'directions' &&
//                 directions.map((direction, index) => (
//                     <li
//                         key={index}
//                         className={selectedDirection === direction ? 'selected' : undefined}
//                         onClick={() => handleDirectionClick(direction)}
//                     >
//                         {direction}
//                     </li>
//                 ))}
//                 {displayMode === 'types' &&
//                 types.map((type, index) => (
//                     <li
//                         key={index}
//                         className={selectedType === type ? 'selected' : undefined}
//                         onClick={() => handleTypeClick(type)}
//                     >
//                         {type}
//                     </li>
//                 ))}
//             </ul>
//         </aside>
//     );
// };
//
// export default Sidebar;






// client/src/components/Sidebar/Sidebar.js
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ onTypeSelect, onDirectionSelect }) => {
    const [directions, setDirections] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDirection, setSelectedDirection] = useState(null);

    useEffect(() => {
        const fetchDirections = async () => {
            try {
                const response = await fetch('http://localhost:5500/api/products/directions');
                if (!response.ok) {
                    throw new Error(`Error fetching directions: ${response.statusText}`);
                }

                const data = await response.json();

                console.log('Received directions data:', data);

                if (Array.isArray(data)) {
                    setDirections(data);
                } else {
                    console.error('Invalid data format for directions:', data);
                }
            } catch (error) {
                console.error('Error fetching directions:', error.message);
            }
        };

        fetchDirections();
    }, []);

    const fetchTypesByDirection = async (direction) => {
        try {
            const response = await fetch(`http://localhost:5500/api/products/types?direction=${direction}`);
            if (!response.ok) {
                throw new Error(`Error fetching types for direction ${direction}: ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`Received types data for direction ${direction}:`, data);

            if (Array.isArray(data)) {
                setTypes(data);
            } else {
                console.error(`Invalid data format for types for direction ${direction}:`, data);
            }
        } catch (error) {
            console.error(`Error fetching types for direction ${direction}:`, error.message);
        }
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
        onTypeSelect && onTypeSelect(type);
    };

    const handleDirectionClick = (direction) => {
        setSelectedDirection(direction);
        onDirectionSelect && onDirectionSelect(direction);
        fetchTypesByDirection(direction);
    };

    const handleShowAllClick = () => {
        setSelectedType(null);
        setSelectedDirection(null);
        onTypeSelect && onTypeSelect(null);
        onDirectionSelect && onDirectionSelect(null);
        setTypes([]); // Очищаем список типов при показе всех направлений
    };

    return (
        <aside className="sidebar">
            <h2>Тип товара</h2>
            <ul>
                <li
                    className={!selectedType && !selectedDirection ? 'selected' : undefined}
                    onClick={handleShowAllClick}
                >
                    Все товары
                </li>
                {selectedDirection ? (
                    types.map((type, index) => (
                        <li
                            key={index}
                            className={selectedType === type ? 'selected' : undefined}
                            onClick={() => handleTypeClick(type)}
                        >
                            {type}
                        </li>
                    ))
                ) : (
                    directions.map((direction, index) => (
                        <li
                            key={index}
                            className={selectedDirection === direction ? 'selected' : undefined}
                            onClick={() => handleDirectionClick(direction)}
                        >
                            {direction}
                        </li>
                    ))
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
