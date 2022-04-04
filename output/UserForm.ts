import { Column } from "typeorm";
import { EntityModel } from "@midwayjs/orm";

@EntityModel("user_form", { schema: "db_whh" })
export class UserForm {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("char", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("char", { name: "sex", nullable: true, length: 5 })
  sex: string | null;

  @Column("char", { name: "phone", nullable: true, length: 15 })
  phone: string | null;
}
