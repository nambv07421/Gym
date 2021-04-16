import { NgModule } from "@angular/core";
import { BaseTableModule } from "src/app/components/table/base-table/base-table.component";
import { MemberComponent } from "./member.component";
import { ListMemberComponent } from './component/list-member/list-member.component';
import { RouterModule } from "@angular/router";
import { memberRouter } from "./member.routes";

@NgModule({
    declarations: [
        MemberComponent,
        ListMemberComponent
    ],
    imports: [
        BaseTableModule,
        RouterModule.forChild(memberRouter)
    ], exports: [
        MemberComponent
    ]
})
export class MemberModule {

}