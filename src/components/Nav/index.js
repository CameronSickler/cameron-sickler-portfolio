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
            <nav>
                <ul className="flex-row justify-content">
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
                    <li>
                        <a data-testid="link" href="https://www.linkedin.com/in/cameron-sickler-a17764106/" rel="noreferrer" target="_blank">
                            <span role="img" aria-label="linkedin">
                                {" "}
                                <img className="icon mx-1"
                                    src={require(`../../assets/icons/linkedin.png`)}
                                    alt="linkedIn"
                                />
                            </span>{" "}

                        </a>
                    </li>

                    <li>
                        <a data-testid="link" href="https://github.com/CameronSickler" rel="noreferrer" target="_blank">
                            <span role="img" aria-label="github">
                                {" "}
                                <img className="icon mx-1"
                                    src={require(`../../assets/icons/github.png`)}
                                    alt="github"
                                />
                            </span>{" "}

                        </a>
                    </li>

                    <li>
                        <a data-testid="link" href="https://www.youtube.com/channel/UCj-SoL543DW7DIkDCOjPbuw" rel="noreferrer" target="_blank">
                            <span role="img" aria-label="youtube">
                                {" "}
                                <img className="icon mx-1"
                                    src={require(`../../assets/icons/youtube.png`)}
                                    alt="youtube"
                                />
                            </span>{" "}

                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;