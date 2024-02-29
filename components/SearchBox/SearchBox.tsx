'use client'
import React from "react";
import "./searchBox.css";
import { useState } from 'react';

const SearchBox = () => {
    const [formData, setFormData] = useState({ queryLine: '' });

    const saveText = (e:any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className="search-box">
            <form>
                <input type="text" name="queryLine" value={formData.queryLine} placeholder="Find Your Pokemon..." onChange={saveText}/>
            </form>
        </div>
    );
}

export default SearchBox;