import { useState } from "react";

const Ex2 = ({ initialItems = [], placeholder = "Ajouter un élément..." }) => {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState("");

    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const handleItemDelete = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <> 
            <h1>Liste des items :</h1>
            <input 
                type="text" 
                value={newItem} 
                onChange={(e) => setNewItem(e.target.value)} 
                placeholder={placeholder} 
            />
            <button onClick={handleAddItem}>Ajouter</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => handleItemDelete(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Ex2;
