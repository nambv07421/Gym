import { TableModel } from "./base/table.model";

export class MemberModel {
    EmployeeId: number;
    WorkingYear: number;
    WorkingMonth: number;
    CategoryId: number;
    Title: string;
    Amount: number;
    Type: number;

    public get table(): Array<TableModel> {
        return [
            {
                id: 'id',
                name: 'STT',
                width: 100,
                type: 'number'
            },
            {
                id: 'name',
                name: 'Họ và tên',
                width: 200,
                type: 'text'
            },
            {
                id: 'email',
                name: 'Email',
                width: 200,
                type: 'text',
            },
            {
                id: 'phone',
                name: 'Phone',
                width: 200,
                type: 'text',
            },
            {
                id: 'birth_date',
                name: 'Ngày sinh',
                width: 200,
                type: 'text',
            },
            {
                id: 'address',
                name: 'Địa chỉ',
                width: 200,
                type: 'text',
            },
            {
                id: 'setting',
                name: 'Hành động',
                width: 100,
                type: 'setting',
                databutton: [
                    {
                        buttonLock: "true"
                    },
                    {
                        buttonUnlock: "true"
                    }


                ]
            }
        ];
    }

}