export class GetToday{
    getToday(){
        const date = new Date();
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth()+1).padStart(2,"0");//month는 0부터 시작하여 항상 +1하기
        const dd = String(date.getDate()).padStart(2, "0");
        const today = `${yyyy}-${mm}-${dd}`;
        return today
    } 
} 
