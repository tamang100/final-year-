import React from "react";
import { useSearchParams } from "react-router-dom";
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FilterCheckBox from "./FilterCheckBox";

const ListItemstyle = {
  borderBottom: "1px solid #CCCCCC",
  paddingTop: "20px",
  paddingBottom: "20px",
};

export default function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openCategory, setOpenCategory] = React.useState(false);
  const [category, setCategory] = React.useState({
    Sofas: false,
    Bookshelves: false,
    Desks: false,
    Beds: false,
    "Office Chairs": false,
  });

  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      let params = searchParams.get("category");
      if (params) {
        let valArray = params.split("_");
        for (let i in valArray) {
          if (category[valArray[i]] !== undefined) {
            setCategory((prev) => {
              return { ...prev, [valArray[i]]: true };
            });
          }
        }
      }
      return;
    }

    let categoryQuery = "";
    for (let i in category) {
      if (category[i]) {
        categoryQuery = categoryQuery + `${i}_`;
      }
    }
    if (categoryQuery === "") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryQuery);
    }
    setSearchParams(searchParams);
  }, [category, searchParams, setSearchParams]);

  return (
    <>
      <ListItemButton
        style={ListItemstyle}
        onClick={() => setOpenCategory(!openCategory)}
      >
        <ListItemText
          disableTypography
          sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
          primary="Category"
        />
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Sofas */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Sofas: !category.Sofas,
              });
            }}
          >
            <FilterCheckBox label="Sofas" checked={category.Sofas} />
          </ListItemButton>

          {/* Desks */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Desks: !category.Desks,
              });
            }}
          >
            <FilterCheckBox label="Desks" checked={category.Desks} />
          </ListItemButton>

          {/* Office Chairs */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                "Office Chairs": !category["Office Chairs"],
              });
            }}
          >
            <FilterCheckBox
              label="Office Chairs"
              checked={category["Office Chairs"]}
            />
          </ListItemButton>

          {/* Beds */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Beds: !category.Beds,
              });
            }}
          >
            <FilterCheckBox label="Beds" checked={category["Beds"]} />
          </ListItemButton>

          {/* Bookshelves */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Bookshelves: !category.Bookshelves,
              });
            }}
          >
            <FilterCheckBox
              label="Bookshelves"
              checked={category.Bookshelves}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
