export const DateHelper = {
    format: (sDate: string) => {
        
        const d = new Date(sDate)
        
        const day:string = d.getDate().toString().padStart(2, '0');
        const month:string = (d.getMonth() + 1).toString().padStart(2, '0');
        const year:string = d.getFullYear().toString();

        return `${day}.${month}.${year}`
    }
}