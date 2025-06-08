import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Dashboard.css'

const MyOrderTable = () => {
    const columns = [
        {
            name: "SL",
            selector: (row, index) => (index + 1),
            width: "60px"
        },
        {
            name: "Date and Time",
            selector: row => row.date_and_time,

        },
        {
            name: "Project Name",
            selector: row => row.item_code,

        },
        {
            name: "Delevery Time",
            selector: row => row.items,

        },
        {
            name: "Seller Status",
            selector: row => {
                switch (row.status) {
                    case "cancel":
                        return <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Cancelled</button>;
                    case "running":
                        return <button style={{ backgroundColor: "orange", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Pending</button>;
                    default:
                        return <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Complete</button>;
                }
            },
        },
        {
            name: "Cost",
            selector: row => row.description,

        },
        {
            name: "Action",
            cell: row => <div className="d-flex align-items-center gap-2">
                <Link to='' className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
                <Link to='' className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
                <button type="button" className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
            </div>,
        }
    ];


    const data = [
        {
            item_code: "Website Revamp",
            items: "3 months",
            unit_price: "In Progress",
            description: "$1,500",
            status: 'cancel',
            date_and_time: '10-02-2025 10:12 AM'
        },
        {
            item_code: "Mobile App",
            items: "6 months",
            unit_price: "Completed",
            description: "$5,000",
            status: 'running'
        },
        {
            item_code: "Mobile App",
            items: "6 months",
            unit_price: "Completed",
            description: "$5,000",
            status: 'complete'
        }
    ];


    return (
        <DataTable
            columns={columns}
            data={data}
            keyField="id"
        />
    )
}

export default MyOrderTable