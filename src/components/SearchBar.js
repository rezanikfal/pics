import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;