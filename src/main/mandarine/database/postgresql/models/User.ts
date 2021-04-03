
import {Table, Id, GeneratedValue, Column} from "https://deno.land/x/mandarinets@v2.3.2/mod.ts";

@Table({ schema: "public", name: "Users"})
export default class Users {

    @Id()
    @GeneratedValue({strategy: "SEQUENCE"})
    @Column()
    public id: number;

    @Column()
    public firstname: string;

    @Column()
    public lastname: string;

    @Column()
    public country: string;

}