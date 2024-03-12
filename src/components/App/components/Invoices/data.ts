import {GlobalTheme} from "../../../../theme";

export const StatusesColor = {
    "Out Of Date": GlobalTheme.palette.error.main,
    "Progress": GlobalTheme.palette.warning.main,
    "Paid": GlobalTheme.palette.success.main,
};

export enum Status {
    OutOfDate = "Out Of Date",
    Progress = "Progress",
    Paid = "Paid",
}

export const columns = [
    {field: "id", headerName: "Invoice ID"},
    {field: "category", headerName: "Category"},
    {field: "price", headerName: "Price"},
    {field: "status", headerName: "Status"},
];

export const rows = [
    {id: "INV-1990", category: "Android", price: "$83.74", status: Status.Paid},
    {id: "INV-1991", category: "Mac", price: "$97.14", status: Status.OutOfDate},
    {id: "INV-1992", category: "Windows", price: "$68.71", status: Status.Progress},
    {id: "INV-1993", category: "Android", price: "$85.21", status: Status.Paid},
    {id: "INV-199", category: "Mac", price: "$52.17", status: Status.Paid},
];
