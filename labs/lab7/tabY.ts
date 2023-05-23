import _ from "lodash";

export default function tabY(arrX: any): any {
    console.log(arrX.map((elem: any) => {
        return Number(
            //((Math.pow(Math.E, elem) + Math.pow(Math.E, -elem)) / 2).toFixed(2)
            Math.cos(elem)
        );
    }));
    return arrX.map((elem: any) => {
        return Number(
            //((Math.pow(Math.E, elem) + Math.pow(Math.E, -elem)) / 2).toFixed(2)
            Math.cos(elem)
        );
    });
}