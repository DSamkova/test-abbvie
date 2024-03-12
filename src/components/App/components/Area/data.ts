enum Areas {
    Asia = "Asia",
    America = "America"
}
interface IAreasDataPerYear {
    [year: string]: {
        [area: string]: number[]
    }
}
export const AreasDataPerYear: IAreasDataPerYear = {
    "2019": {
        [Areas.Asia]: [30, 40, 35, 50, 49, 60, 70, 91, 125, 70, 91, 125],
        [Areas.America]: [40, 60, 55, 70, 61, 80, 90, 110, 140, 90, 110, 140],
    },
    "2020": {
        [Areas.Asia]: [125, 91, 70, 125, 91, 70, 60, 49, 50, 35, 40, 30],
        [Areas.America]: [140, 110, 90, 140, 110, 90, 80, 61, 70, 55, 60, 40],
    }
}

export const SeriesAreas = [{
    id: Areas.Asia,
    name: Areas.Asia,
}, {
    id: Areas.America,
    name: Areas.Asia,
}]