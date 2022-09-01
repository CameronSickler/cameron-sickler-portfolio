import React from "react";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="dog">
                        {" "}
                        🐶
                    </span>{" "}
                    Cameron
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;