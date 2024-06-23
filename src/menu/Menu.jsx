// import ItemCard from "./menuItem/Itemcard"
import classes from "./Menu.module.css";
// import MenuCard from "./Menucard"
import ItemcardData from "./menuItem/Itemcarddata";
import ItemCard from "./menuItem/Itemcard";
import { useState, useEffect } from "react";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedlist, setSelectedList] = useState("All");
  const [filteredItems, setFilteredItems] = useState(ItemcardData);
  // const handleSearch = () =>{
  //     onSearch(searchTerm)
  // }

  const handleSearch = (query) => {
    setSearchTerm(query);

    const filteredResults = ItemcardData.reduce((accumulator, section) => {
      const filteredItems = section.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase().trim())
      );

      if (filteredItems.length > 0) {
        accumulator.push({ ...section, items: filteredItems });
      }

      return accumulator;
    }, []);

    setFilteredItems(filteredResults);
  };

  const clickHandler = (selectedButton) => {
    // console.log("hi")
    setSelectedList(selectedButton);
    console.log(selectedButton);
  };
  useEffect(() => {
    if (selectedlist === "All") {
      setFilteredItems(ItemcardData);
    } else {
      const filteredResults = ItemcardData.filter(
        (section) => section.name === selectedlist
      );
      setFilteredItems(filteredResults);
    }
  }, [selectedlist]);

  return (
    <div className={classes.menucontainer}>
      <div className={classes.ourmenu}>
        <div className={classes.overlay}></div>

        <img
          src="/images/cafeteria.jpg"
          alt="cafeteria"
          // width="900"
          // height="350"
        />
        <div className={classes.content}>
          <h2>Our Menu</h2>
          <div className={classes.searchbar}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for main course , fast food , wafers or beverages"
              onChange={(e) => handleSearch(e.target.value)}
              value={searchTerm}
              // onClick={handleSearch}
            />
          </div>
        </div>
      </div>

      <menu>
        <MenuButton
          isSelected={selectedlist === "All"}
          onClick={() => clickHandler("All")}
        >
          All
        </MenuButton>
        <MenuButton
          isSelected={selectedlist === "Main Course"}
          onClick={() => clickHandler("Main Course")}
        >
          Main Course
        </MenuButton>
        <MenuButton
          isSelected={selectedlist === "Fast Food"}
          onClick={() => clickHandler("Fast Food")}
        >
          Fast Food
        </MenuButton>
        <MenuButton
          isSelected={selectedlist === "Wafers"}
          onClick={() => clickHandler("Wafers")}
        >
          Wafers
        </MenuButton>
        <MenuButton
          isSelected={selectedlist === "Beverages"}
          onClick={() => clickHandler("Beverages")}
        >
          Beverages
        </MenuButton>
      </menu>

      {filteredItems.length > 0 ? (
        filteredItems.map((section, index) => (
          <div key={index}>
            {/* <h2 className={classes.menuhead}>{section.name}</h2> */}

            {section.items.map((item, itemIndex) => (
              <ItemCard
                // onAddToCart={addToCartHandler}
                key={itemIndex}
                id={item.id}
                // itemIndex = {item.id}
                title={item.title}
                price={item.price}
                info={item.info}
                imgsrc={item.imgsrc}
              />
            ))}
          </div>
        ))
      ) : (
        <div className={classes.other}>
          <h2 className={classes.noresult}> Uh !! No results found</h2>
        </div>
      )}
    </div>
  );
};
export default Menu;
