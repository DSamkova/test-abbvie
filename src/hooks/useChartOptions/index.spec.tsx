import { useTheme } from "@mui/material";
import { useChartOptions } from "./index";
import { ApexOptions } from "apexcharts";
jest.mock("@mui/material", () => ({
    useTheme: jest.fn(),
}));
describe("useChartOptions", () => {
    it("returns correct chart options", () => {
        const mockedUseTheme = useTheme as jest.Mock;
        mockedUseTheme.mockReturnValue({
            palette: {
                success: { main: "#00FF00" },
                warning: { main: "#FFFF00" },
                secondary: { main: "#0000FF" },
                error: { main: "#FF0000" },
            },
        });

        const labels = ["Label1", "Label2", "Label3"];

        const result = useChartOptions({ labels });

        const expectedOptions: ApexOptions = {
            chart: { background: "transparent" },
            colors: ["#00FF00", "#FFFF00", "#0000FF", "#FF0000"],
            dataLabels: { enabled: false },
            labels: ["Label1", "Label2", "Label3"],
            legend: { show: true, position: "bottom" },
            plotOptions: {
                pie: {
                    customScale: 1,
                    expandOnClick: false,
                    donut: {
                        size: "90%",
                        labels: {
                            show: true,
                            total: { show: true },
                        },
                    },
                },
            },
            states: { active: { filter: { type: "none" } }, hover: { filter: { type: "none" } } },
            stroke: { width: 0 },
            tooltip: { fillSeriesColor: false },
        };

        expect(result).toEqual(expectedOptions);
    });
});
