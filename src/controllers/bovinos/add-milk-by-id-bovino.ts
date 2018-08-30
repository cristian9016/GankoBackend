import { BovinoService } from '../../services/bovino-service';
import { Bovino } from "../../services/models/bovinos";
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { LecheService } from '../../services/leche-service';
import { Produccion } from '../../services/models/produccion';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

export function addMilkByIdBovino(req, res: Response, next) {
    let leche:Produccion = req.body.leche;
    let idBovino = req.params.idBovino;
    LecheService.instance.insert(leche)
        .then(data => {
            if (data.length > 0) {
                res.send(new ResponseBody(true, data, null));
            }
        }, err => {
            res.status(500).send(new ResponseBody(null, null, err));
        })
}