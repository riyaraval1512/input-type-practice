export interface IHobbies{
    id:number,
    name:string,
    isChecked?:boolean
}

export let HobbiesObjArray:IHobbies[]=[
    {id:1,name:"cricket",isChecked:false},
    {id:2,name:"Chess",isChecked:false},
    {id:3,name:"reading",isChecked:false}
]