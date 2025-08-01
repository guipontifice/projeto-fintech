import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }
    const onClick = (e: SyntheticEvent) => {
        console.log(e)
    }
    return (
        <div>
            <input type="text" value={search} onChange={(e) => handleChange(e)} />
            <button onClick={(e) => onClick(e)} />
        </div>
    )
}

export default Search;