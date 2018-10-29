import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { DBConnection } from './db-connection';
import { Produccion, TYPE_PROD_LECHE } from "./models/produccion";


export class ProduccionService {

    private static _instance: ProduccionService;
    static get instance(): ProduccionService {
        if (ProduccionService._instance == undefined) {
            ProduccionService._instance = new ProduccionService(DBConnection.instance);
        }
        return ProduccionService._instance;
    }

    constructor(private db: DBConnection) { }

    getByIdBovino(idBovino: string) {
        return this.db.ListByType(TYPE_PROD_LECHE,"bovino = $1",[idBovino]);
    }

    getAll() {
        return this.db.ListByType(TYPE_PROD_LECHE);
    }

    insert(produccion: Produccion) {
        toDate(produccion, 'fecha');
        return this.db.insert(produccion);
    }

    update(id: string, produccion: Produccion) {
        toDate(produccion, 'fecha');
        return this.db.replace(id, produccion);
    }

    getById(id: string) {
        return this.db.getById<Produccion>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}