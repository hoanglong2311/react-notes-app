const Header = ({ handleToogleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToogleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="save"
            >
                Toggle Mode
            </button>
        </div>
    );
};
export default Header;
