import React, { useEffect, useState, useContext } from "react";
import { JsonData } from "./Interfaces";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Context } from "./AuthContext";

const Table: React.FC = () => {
  const [data, setData] = useState<JsonData[]>([]);
  const { curUser, setCurUser } = useContext(Context);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  useEffect(() => {
    async function fetchAPI() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataAPI = await data.json();
      setData(dataAPI);
    }

    fetchAPI();
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurUser(null);
  };

  return (
    <div className="section-table">
      <div className="table-data">
        <div>
          <div className="navbar">
            <h1>Hello, </h1>
            <div className="section-button">
              <Button onClick={logout} variant="contained">
                Log Out
              </Button>
            </div>
          </div>

          <Box sx={{ height: 500, width: 1200 }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={25}
              rowsPerPageOptions={[25]}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Table;
