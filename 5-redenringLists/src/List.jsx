
function List(){
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2,name: "orange", calories: 45}, 
                    {id: 3,name: "banana", calories: 105}, 
                    {id: 4,name: "coconut", calories: 159}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical ordering
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical ordering
    // fruits.sort((a, b) => a.calories - b.calories); //Sorting by calories, numeric order (lower to upper)
    // fruits.sort((a, b) => b.calories - a.calories); //Sorting by calories, reverse numeric order (upper to lower)

    

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp; 
                                            <b>{fruit.calories}</b>
                                            </li>); 

    return(<ul>{listItems}</ul>);
}

export default List