import React from 'react';


function Nav() {
    const categories = [
        { name: 'Experience', description: 'Applications I worked on' },
        { name: 'Resume', description: 'Resume image' }
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="dog">🐶</span> Cameron
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                        categories.map((category) => (
                            <li className="mx-1" key={category.name} >
                                <span onClick={() => categorySelected(category.name)}>
                                    {category.name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
export default Nav;